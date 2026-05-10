"use client";

import { Cross, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathName = usePathname();
  return (
    <div className="navbar bg-slate-200 text-sky-500 shadow-sm px-5">
      <Link
        href="/"
        className={
          "navbar-start flex gap-5 " +
          (pathName === "/" ? "text-purple-500" : "")
        }
      >
        <Cross /> หน้าหลัก
      </Link>

      <div className="navbar-end gap-5">
        <Link
          href="/patient"
          className={pathName === "/patient" ? "text-purple-500" : ""}
        >
          ลงทะเบียนผู้ป่วย
        </Link>
        <Link
          href="/admin"
          className={pathName === "/admin" ? "text-purple-500" : ""}
        >
          เจ้าหน้าที่
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
