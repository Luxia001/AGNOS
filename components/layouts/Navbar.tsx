import { Cross, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <Link
        href="/"
        className="text-sky-500 flex-1"
      >
        <Cross />
      </Link>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/patient"}>Patient</Link>
          </li>
          <li>
            <Link href={"/admin"}>Admin</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
