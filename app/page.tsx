import Link from "next/link";

export default function Home() {
  return (
    <div className=" space-y-5">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="profile.jpg"
            className="max-w-[200px] rounded-lg shadow-amber-200 shadow-xs"
            alt="profile"
          />
          <div>
            <span className="text-rotate text-3xl md:text-6xl text-cyan-300 ">
              <span className="">
                <span>Hello World !</span>
                <span>Welcome</span>
              </span>
            </span>

            <p className="py-6 text-pretty text-wrap">
              My name is Panuwat Wichitsiriwat, a passionate Full Stack
              Developer with a strong background in both frontend and backend
              technologies. I have experience working with React, Next.js,
              Node.js, and various databases. I am dedicated to creating
              efficient and user-friendly applications that solve real-world
              problems. With a keen eye for detail and a commitment to
              continuous learning, I strive to deliver high-quality code and
              innovative solutions in every project I undertake.
            </p>
            <div className="flex flex-wrap gap-5 py-5">
              <Link
                href="/patient"
                className="btn  btn-soft  btn-primary"
              >
                ลงทะเบียนผู้ป่วย
              </Link>
              <Link
                href="/admin"
                className="btn btn-soft  btn-primary"
              >
                รายชื่อผู้ป่วย
              </Link>
              <Link
                href="/tech"
                className="btn btn-soft  btn-primary"
              >
                Tech Stack
              </Link>
            </div>
            <div className="flex flex-wrap gap-5">
              <Link
                href={"mailto:panuwat.wichitsiriwat@gmail.com"}
                className="btn btn-soft  btn-info"
              >
                Mail
              </Link>
              <Link
                href={"https://github.com/Luxia001/AGNOS.git"}
                className="btn btn-soft  btn-info"
              >
                Github
              </Link>
              <Link
                href={"https://www.linkedin.com/in/panuwat-v/"}
                className="btn btn-soft  btn-info"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
