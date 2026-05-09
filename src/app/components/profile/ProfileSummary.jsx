import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

const ProfileSummary = ({ user }) => {
  return (
    <section className="rounded-[28px] border border-[#dfe6ff] bg-white p-6 shadow-[0_18px_55px_rgba(19,34,86,0.08)]">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#3154f4]">
          <Sparkles className="h-5.5 w-5.5" strokeWidth={2.2} />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">Learner Dashboard</h2>
          <p className="mt-1 text-sm text-slate-500">Keep your profile ready for course progress.</p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-[#e6ebff] bg-[#f8faff] p-5">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 text-[#3154f4]" strokeWidth={2.1} />
          <div>
            <h3 className="font-semibold text-slate-900">Profile data is connected</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Your current session is using {user.name}&apos;s saved name, email, and image URL.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#e6ebff] p-5">
          <p className="text-3xl font-bold text-slate-950">8</p>
          <p className="mt-1 text-sm font-medium text-slate-500">Courses enrolled</p>
        </div>
        <div className="rounded-2xl border border-[#e6ebff] p-5">
          <p className="text-3xl font-bold text-slate-950">4</p>
          <p className="mt-1 text-sm font-medium text-slate-500">Certificates ready</p>
        </div>
      </div>

      <Link
        href="/courses"
        className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#d8e1fb] px-5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#3154f4] hover:text-[#3154f4]"
      >
        <span>Browse more courses</span>
        <ArrowRight className="h-4.5 w-4.5" strokeWidth={2.2} />
      </Link>
    </section>
  );
};

export default ProfileSummary;
