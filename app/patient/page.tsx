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
    <div className="container max-w-xl m-auto my-5 bg-white p-5 rounded-2xl text-sky-500">
      <h2 className="text-2xl font-bold mb-6 text-center">ลงทะเบียนผู้ป่วย</h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-2"
      >
        {/* --- ส่วนชื่อ --- */}
        <label className="label">
          <span className="text-red-500">*</span> ชื่อ
        </label>
        <input
          name="firstName"
          className="input validator w-full "
          type="text"
          required
          placeholder="First Name"
        />
        <label className="label">ชื่อกลาง</label>
        <input
          name="middleName"
          className="input validator w-full"
          type="text"
          placeholder="Middle Name"
        />
        <label className="label">
          <span className="text-red-500">*</span> นามสกุล
        </label>
        <input
          name="lastName"
          className="input validator w-full"
          type="text"
          required
          placeholder="Last Name"
        />

        <label className="label">
          <span className="text-red-500">*</span> วันเกิด
        </label>
        <input
          name="dateOfBirth"
          className="input validator w-full"
          type="date"
          required
        />

        <label className="label">
          <span className="text-red-500">*</span> เพศ
        </label>
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

        <label className="label">
          <span className="text-red-500">*</span> เบอร์โทรศัพท์
        </label>
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          required
          className="input validator w-full"
          pattern="[0-9]*"
          minLength={10}
          maxLength={10}
        />

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
