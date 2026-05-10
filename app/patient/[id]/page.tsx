"use client";

import { Get_Patient_By_Id } from "@/services/patients";
import { patients } from "@prisma/client";
import { Undo2 } from "lucide-react";
import React, { useEffect } from "react";

function DetailPatient() {
  const [detail, setDetail] = React.useState<patients | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await Get_Patient_By_Id(5);
        setDetail(data);
      } catch (err) {
        console.error("Fetch patient detail error:", err);
      }
    };

    fetchDetail();
  }, []);

  return (
    <div className="">
      <div className="flex justify-end p-5">
        <button
          className="btn btn-primary rounded-full"
          onClick={() => window.history.back()}
        >
          <Undo2 />
        </button>
      </div>
      <div className="container mx-auto rounded-xl shadow-xl text-slate-950 p-5 ">
        <h1 className="text-2xl text-center">รายละเอียดลงทะเบียนผู้ป่วย</h1>

        <div className="divider divider-info"></div>
        {detail ? (
          <div className=" grid md:grid-cols-2 gap-5 ">
            <p>First name: {detail.firstName}</p>
            <p>Last name: {detail.lastName}</p>
            <p>
              {" "}
              Birth date: {new Date(detail.dateOfBirth).toLocaleDateString()}
            </p>
            <p>Gender: {detail.gender}</p>
            <p>Phone: {detail.phone}</p>
            <p>Email: {detail.email}</p>
            <p>Language: {detail.language}</p>
            <p>Address: {detail.address}</p>
            <p>Nationality: {detail.nationality}</p>
            <p>Emergency Contact: {detail.emergencyContact}</p>
            <p>Religion: {detail.religion}</p>
            <p>Created At: {new Date(detail.createdAt).toLocaleString()}</p>
          </div>
        ) : (
          <p>Loading patient detail...</p>
        )}
      </div>
    </div>
  );
}

export default DetailPatient;
