"use client";

import React, { useState } from "react";
import { PatientInput, Post_Patient } from "../../services/patients";
import "./patient.css";

function Patient() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(
      formData.entries(),
    ) as unknown as PatientInput;

    try {
      await Post_Patient(data);
      setMessage("ลงทะเบียนสำเร็จ!");
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setTimeout(() => setMessage(""), 3000);
      setLoading(false);
    }
  };

  return (
    <div className="p-5">
      <div className="grid md:grid-cols-2 place-items-center bg-gradient-to-br from-cyan-200 to-blue-800 rounded-xl p-5">
        <div className="text-center lg:text-left text-blue-950">
          <h1 className="text-3xl md:text-5xl font-bold">Patient register</h1>
          <h1 className="text-3xl md:text-5xl font-bold">ลงทะเบียนผู้ป่วย</h1>
          <p className="py-5">
            กรอกข้อมูลผู้ป่วยให้ครบถ้วนเพื่อทำการลงทะเบียนและจัดการข้อมูลได้อย่างมีประสิทธิภาพ
          </p>
        </div>
        <div className="container max-w-xl m-auto my-5 bg-white shadow-2xl p-5 rounded-xl text-sky-500">
          <form
            onSubmit={handleSubmit}
            className="fieldset  grid text-slate-900"
          >
            {/* --- ส่วนชื่อ --- */}
            <fieldset className="fieldset">
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
              <p className="validator-hint hidden">โปรดระบุ</p>
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">ชื่อกลาง</label>
              <input
                name="middleName"
                className="input w-full"
                type="text"
                placeholder="Middle Name"
              />
            </fieldset>
            <fieldset className="fieldset">
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
              <p className="validator-hint hidden">โปรดระบุ</p>
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">
                <span className="text-red-500">*</span> วันเกิด
              </label>
              <input
                name="dateOfBirth"
                className="input validator w-full"
                type="date"
                required
              />
              <p className="validator-hint hidden">โปรดระบุ</p>
            </fieldset>
            <fieldset className="fieldset">
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
              <p className="validator-hint hidden">โปรดระบุ</p>
            </fieldset>
            {/* --- ข้อมูลติดต่อ --- */}
            <fieldset className="fieldset">
              <label className="label">
                <span className="text-red-500">*</span> เบอร์โทรศัพท์
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="09-xxxx-xxxx"
                required
                className="input validator w-full"
                pattern="[0-9]*"
                minLength={10}
                maxLength={10}
              />
              <p className="validator-hint hidden">
                โปรดระบุรูปแบบเบอร์โทรศัพท์ให้ถูกต้อง
              </p>
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">
                <span className="text-red-500">*</span> อีเมล
              </label>
              <input
                name="email"
                type="email"
                placeholder="mail@site.com"
                required
                className="input validator w-full"
              />
              <p className="validator-hint hidden">
                โปรดระบุรูปแบบอีเมลให้ถูกต้อง
              </p>
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">
                <span className="text-red-500">*</span> ที่อยู่
              </label>
              <textarea
                name="address"
                className="textarea validator w-full"
                placeholder="Address"
                required
              ></textarea>
              <p className="validator-hint hidden">โปรดระบุ</p>
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">
                <span className="text-red-500">*</span> สัญชาติ
              </label>
              <input
                name="nationality"
                className="input validator w-full"
                type="text"
                placeholder="Nationality"
                required
              />
              <p className="validator-hint hidden">โปรดระบุ</p>
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">
                <span className="text-red-500">*</span> ภาษาที่ต้องการ
              </label>
              <input
                name="language"
                className="input validator w-full"
                type="text"
                placeholder="Language"
                required
              />
              <p className="validator-hint hidden">โปรดระบุ</p>
            </fieldset>
            <fieldset className="fieldset">
              <label className="label"> ผู้ติดต่อฉุกเฉิน</label>
              <input
                name="emergencyContact"
                className="input w-full"
                type="text"
                placeholder="Emergency Contact (name and relationship)"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">ศาสนา</label>
              <input
                name="religion"
                className="input w-full"
                type="text"
                placeholder="Religion"
              />
            </fieldset>
            <button
              type="submit"
              className={`btn btn-primary ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? "กำลังบันทึก..." : "ลงทะเบียน"}
            </button>
          </form>
        </div>
      </div>
      {message && (
        <div
          role="alert"
          className="alert alert-success fixed top-5 right-5 z-50 gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}

export default Patient;
