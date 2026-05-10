export interface PatientInput {
  id?: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: string; // รับเป็น string จาก input type="date"
  gender: string;
  phone: string;
  email: string;
  language: string;
  address: string;
  nationality: string;
  emergencyContact: string;
  religion: string;
}

export const Post_Patient = async (data: PatientInput) => {
  try {
    const response = await fetch("/api/patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      // ดึง error message ที่เราส่งมาจาก API (เช่น "Email already exists")
      throw new Error(result.error || "Something went wrong");
    }

    return result;
  } catch (error: any) {
    console.error("Post_Patient Service Error:", error.message);
    throw error;
  }
};

export const Get_Patients = async () => {
  const response = await fetch("/api/patient");
  if (!response.ok) throw new Error("Failed to fetch patients");
  return response.json();
};

export const Get_Patient_By_Id = async (id: number) => {
  const response = await fetch(`/api/patient/${id}`);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Failed to fetch patient detail");
  }

  return result;
};
