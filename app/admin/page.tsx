"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Get_Patients } from "@/services/patients"; // ฟังก์ชัน fetch ปกติที่เราสร้างไว้
import { patients } from "@prisma/client";
import { ChevronRight } from "lucide-react";

// 1. ตั้งค่า Supabase Client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

function Admin() {
  const [patients, setPatients] = useState<patients[]>([]);
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
        <h1 className="text-2xl font-bold">รายชื่อผู้ป่วย</h1>
      </div>
      <ul className="list bg-base-100 rounded-box shadow-md">
        {patients.map((p, index) => (
          <li
            className="list-row flex justify-between items-center"
            key={index}
          >
            <div className="">
              <div>
                {p.firstName} {p.middleName} {p.lastName}
              </div>
              <div className="text-sm">
                {p.email} | {p.phone}
              </div>
              <p className="text-sm">
                {p.gender} {p.nationality}
              </p>
            </div>
            <button className="btn btn-square btn-primary text-white">
              <ChevronRight />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
