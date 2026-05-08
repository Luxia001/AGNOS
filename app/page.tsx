export default function Home() {
  return (
    <div className="p-5">
      <header className="text-center p-5">
        <p className="text-2xl md:text-4xl text-cyan-300 font-bold">
          Welcome to my project
        </p>
        <p className="text-2xl text-pink-400 font-semibold">TechStack</p>
      </header>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="card bg-base-100 w-86 h-86 shadow-sm">
          <figure className="h-full bg-white p-5">
            <img
              src="next.svg"
              alt="NEXTjs"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">NEXTjs</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-86 h-86 shadow-sm">
          <figure className="h-full bg-white p-5">
            <img
              src="https://img.daisyui.com/images/daisyui/mark-static.svg"
              alt="DaisyUI"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">DaisyUI</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-86 h-86 shadow-sm">
          <figure className="h-full bg-white p-5">
            <img
              src="https://lucide.dev/logo.dark.svg"
              alt="Lucide"
              className="w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Lucide</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-86 h-86 shadow-sm">
          <figure className="h-full bg-slate-800 p-5">
            <img
              src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.0~s.iziag2xd..svg"
              alt="Tailwind CSS"
              className="w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tailwind CSS</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-86 h-86 shadow-sm">
          <figure className="h-full bg-slate-800 p-5">
            <img
              src="https://www.prisma.io/docs-static/_next/static/media/logo-white.02012a6c.svg?dpl=dpl_ELA5HG2QVfan6PFmU1kXWtzn2gt1"
              alt="Prisma"
              className="w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Prisma</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-86 h-86 shadow-sm">
          <figure className="h-full bg-slate-800 p-5">
            <img
              src="https://supabase.com/dashboard/img/supabase-logo.svg"
              alt="Supabase"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Supabase</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-86 h-86 shadow-sm">
          <figure className="h-full bg-slate-800 p-5">
            <img
              src="vercel.svg"
              alt="Vercel"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Vercel</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
