import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

const NotFoundView = () => {
  return (
    <main className="bg-[#f7f9ff] px-4 py-12 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-3xl rounded-[30px] border border-[#e6ebff] bg-white px-6 py-12 text-center shadow-[0_18px_55px_rgba(19,34,86,0.06)] sm:px-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#4b5eff]">
          <Compass className="h-8 w-8" strokeWidth={2.1} />
        </div>
        <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#4b5eff]">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
          The page you are trying to open does not exist or may have been moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4b5eff] to-[#3554f6] px-5 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(53,84,246,0.2)]"
          >
            <ArrowLeft className="h-4.5 w-4.5" strokeWidth={2.2} />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/courses"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-[#dbe4ff] px-5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#bfcdfd] hover:text-[#3554f6]"
          >
            Browse Courses
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFoundView;
