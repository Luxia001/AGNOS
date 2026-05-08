"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Get_Patients } from "@/services/patients"; // ฟังก์ชัน fetch ปกติที่เราสร้างไว้

// 1. ตั้งค่า Supabase Client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

function Admin() {
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await Get_Patients();
      setPatients(data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 2. ระบบ Real-time ดักฟังข้อมูลใหม่
  useEffect(() => {
    const channel = supabase
      .channel("realtime-patients") // ชื่อ channel อะไรก็ได้
      .on(
        "postgres_changes",
        {
          event: "INSERT", // ดักเฉพาะตอนมีข้อมูลใหม่
          schema: "public",
          table: "patients", // ชื่อ Table ใน Database ของคุณ
        },
        (payload) => {
          console.log("New Patient Detected!", payload.new);
          fetchData();
        },
      )
      .subscribe();

    // ทำความสะอาดเมื่อปิดหน้าเว็บ
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (loading) return <div className="p-10">กำลังโหลดข้อมูล...</div>;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">รายชื่อผู้ป่วย (Real-time)</h1>
        <div className="badge badge-success gap-2">Live Update On</div>
      </div>

      <div className="overflow-x-auto border rounded-lg">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="bg-base-200">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Nationality</th>
              <th>Registered At</th>
            </tr>
          </thead>
          <tbody>
            {patients.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center"
                >
                  ไม่มีข้อมูลผู้ป่วย
                </td>
              </tr>
            ) : (
              patients.map((p, index) => (
                <tr
                  key={index}
                  className="hover animate-in fade-in slide-in-from-top-2"
                >
                  <td className="font-semibold">
                    {p.firstName} {p.lastName}
                  </td>
                  <td>{p.email}</td>
                  <td>{p.phone}</td>
                  <td>{p.gender}</td>
                  <td>{p.nationality}</td>
                  <td className="text-xs text-gray-500">
                    {new Date(p.createdAt).toLocaleString("th-TH")}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
