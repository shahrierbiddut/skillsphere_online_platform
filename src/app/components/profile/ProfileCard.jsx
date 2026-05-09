import Link from "next/link";
import { BookOpen, CalendarDays, Link2, PencilLine, UserRound } from "lucide-react";
import ProfileAvatar from "./ProfileAvatar";

const ProfileCard = ({ user }) => {
  return (
    <section className="rounded-[28px] border border-[#dfe6ff] bg-white p-6 shadow-[0_18px_55px_rgba(19,34,86,0.08)]">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#3154f4]">
          <UserRound className="h-5.5 w-5.5" strokeWidth={2.2} />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-950">My Profile</h1>
      </div>

      <ProfileAvatar imageUrl={user.avatar} name={user.name} />

      <div className="mt-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">{user.name}</h2>
        <p className="mt-1 text-sm font-medium text-slate-500">{user.email}</p>
        <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#ded7ff] bg-[#f4f0ff] px-4 py-2 text-sm font-semibold text-[#6548ef]">
          <BookOpen className="h-4 w-4" strokeWidth={2.1} />
          Student
        </span>
      </div>

      <div className="my-6 h-px bg-[#edf1ff]" />

      <div className="space-y-5">
        <div className="flex items-start gap-4">
          <CalendarDays className="mt-1 h-5 w-5 text-[#3154f4]" strokeWidth={2.1} />
          <div>
            <p className="text-xs font-medium text-slate-500">Member Since</p>
            <p className="mt-1 text-sm font-semibold text-slate-800">May 12, 2024</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Link2 className="mt-1 h-5 w-5 text-[#3154f4]" strokeWidth={2.1} />
          <div className="min-w-0">
            <p className="text-xs font-medium text-slate-500">Image URL</p>
            <p className="mt-1 break-all text-sm font-semibold text-slate-800">{user.avatar}</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <BookOpen className="mt-1 h-5 w-5 text-[#3154f4]" strokeWidth={2.1} />
          <div>
            <p className="text-xs font-medium text-slate-500">Courses Enrolled</p>
            <p className="mt-1 text-sm font-semibold text-slate-800">8</p>
          </div>
        </div>
      </div>

      <div className="mt-7">
        <Link
          href="/profile/update"
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3154f4] to-[#123edb] text-sm font-semibold text-white shadow-[0_16px_30px_rgba(49,84,244,0.24)] transition-all hover:-translate-y-0.5"
        >
          <PencilLine className="h-4.5 w-4.5" strokeWidth={2.2} />
          <span>Update Information</span>
        </Link>
      </div>
    </section>
  );
};

export default ProfileCard;
