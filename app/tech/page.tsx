import Card from "@/components/UI/card";
import React from "react";

const tech = [
  {
    src: "next.svg",
    alt: "NEXTjs",
    title: "NEXTjs",
  },
  {
    src: "https://img.daisyui.com/images/daisyui/mark-static.svg",
    alt: "DaisyUI",
    title: "DaisyUI",
  },
  {
    src: "https://lucide.dev/logo.dark.svg",
    alt: "Lucide",
    title: "Lucide",
  },
  {
    src: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.0~s.iziag2xd..svg",
    alt: "Tailwind CSS",
    title: "Tailwind CSS",
  },
  {
    src: "https://www.prisma.io/docs-static/_next/static/media/logo-white.02012a6c.svg?dpl=dpl_ELA5HG2QVfan6PFmU1kXWtzn2gt1",
    alt: "Prisma",
    title: "Prisma",
  },
  {
    src: "https://supabase.com/dashboard/img/supabase-logo.svg",
    alt: "Supabase",
    title: "Supabase",
  },
  {
    src: "vercel.svg",
    alt: "Vercel",
    title: "Vercel",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
    alt: "GitHub",
    title: "GitHub",
  },
];

function Tech() {
  return (
    <div className="">
      <header className="text-center p-5">
        <p className="text-2xl text-pink-400 font-semibold">TechStack</p>
      </header>
      <div className="flex flex-wrap justify-center gap-5">
        {tech.map((item, index) => (
          <Card
            key={index}
            src={item.src}
            alt={item.alt}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Tech;
