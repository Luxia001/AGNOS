"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Get_Patients } from "@/services/patients"; // ฟังก์ชัน fetch ปกติที่เราสร้างไว้
import { patients } from "@prisma/client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

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
      .channel("realtime-patients")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "patients",
        },
        () => {
          fetchData();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-primary"></span>
        <p className="ml-2 text-cyan-500">กำลังโหลดข้อมูล...</p>
      </div>
    );

  return (
    <div className=" text-blue-500 p-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">รายชื่อผู้ป่วย</h1>
      </div>
      <ul className="list rounded-box shadow-md">
        {patients.map((p, index) => (
          <li
            className="list-row flex justify-between items-center border-b border-gray-200 text-slate-600 "
            key={p.id}
          >
            <div className="text-sm">
              <div>
                {p.firstName} {p.middleName} {p.lastName}
              </div>
              <div className="text-xs text-gray-500">
                {p.email} | {p.phone}
              </div>
              <p className="text-xs">
                {p.gender} {p.nationality}
              </p>
            </div>
            <Link
              href={`/patient/${p.id}`}
              className="btn btn-square btn-primary text-white"
            >
              <ChevronRight />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
