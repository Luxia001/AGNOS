"use client";

import React, { useState } from "react";
import { PatientInput, Post_Patient } from "../../services/patients";

function Patient() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    // ข้อมูลจะถูกดึงผ่าน "name" attribute ของ input ต่างๆ
    const data = Object.fromEntries(
      formData.entries(),
    ) as unknown as PatientInput;

    try {
      await Post_Patient(data);
      alert("ลงทะเบียนสำเร็จ!");
      (e.target as HTMLFormElement).reset(); // ล้างข้อมูลหลังสมัครสำเร็จ
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-xl m-auto bg-white p-5 rounded-2xl text-sky-500">
      <h2 className="text-2xl font-bold mb-6 text-center">
        ลงทะเบียนผู้ป่วยใหม่
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-2"
      >
        {/* --- ส่วนชื่อ --- */}
        <input
          name="firstName"
          className="input validator w-full"
          type="text"
          required
          placeholder="First Name"
        />
        <input
          name="middleName"
          className="input validator w-full"
          type="text"
          placeholder="Middle Name"
        />
        <input
          name="lastName"
          className="input validator w-full"
          type="text"
          required
          placeholder="Last Name"
        />

        <label className="text-xs ml-1">Date of Birth</label>
        <input
          name="dateOfBirth"
          className="input validator w-full"
          type="date"
          required
        />

        <select
          name="gender"
          defaultValue=""
          className="select appearance-none w-full"
          required
        >
          <option
            value=""
            disabled
          >
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {/* --- ข้อมูลติดต่อ --- */}
        <label className="input validator w-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <g fill="none">
              <path
                d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            required
            pattern="[0-9]*"
            minLength={10}
            maxLength={10}
          />
        </label>

        <label className="input validator w-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect
                width="20"
                height="16"
                x="2"
                y="4"
                rx="2"
              ></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            name="email"
            type="email"
            placeholder="mail@site.com"
            required
          />
        </label>

        {/* --- ข้อมูลเพิ่มเติม --- */}
        <input
          name="nationality"
          className="input validator w-full"
          type="text"
          placeholder="Nationality"
          required
        />
        <input
          name="language"
          className="input validator w-full"
          type="text"
          placeholder="Preferred Language"
          required
        />
        <input
          name="religion"
          className="input validator w-full"
          type="text"
          placeholder="Religion"
        />
        <input
          name="emergencyContact"
          className="input validator w-full"
          type="text"
          placeholder="Emergency Contact (name and relationship)"
          required
        />

        {/* --- ที่อยู่ --- */}
        <textarea
          name="address"
          className="textarea w-full"
          placeholder="Full Address"
          required
        ></textarea>

        {/* --- ปุ่มส่งข้อมูล --- */}
        <button
          type="submit"
          className={`btn btn-primary ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading ? "กำลังบันทึก..." : "ลงทะเบียน"}
        </button>
      </form>
    </div>
  );
}

export default Patient;
