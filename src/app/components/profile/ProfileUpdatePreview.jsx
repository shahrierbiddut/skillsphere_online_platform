import Link from "next/link";
import { CircleCheck, Info, PencilLine, Save } from "lucide-react";

const ProfileUpdatePreview = ({ user }) => {
  return (
    <section className="rounded-[28px] border border-[#dfe6ff] bg-white p-6 shadow-[0_18px_55px_rgba(19,34,86,0.08)]">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#3154f4]">
          <PencilLine className="h-5.5 w-5.5" strokeWidth={2.2} />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">Update Information</h2>
          <p className="mt-1 text-sm text-slate-500">Update your profile details below.</p>
        </div>
      </div>

      <div className="mt-8 space-y-5">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">Name</span>
          <div className="flex h-12 items-center rounded-xl border border-[#d8e1fb] bg-white px-4 text-sm font-medium text-slate-700">
            {user.name}
          </div>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">Image URL</span>
          <div className="flex h-12 items-center overflow-hidden rounded-xl border border-[#d8e1fb] bg-white px-4 text-sm font-medium text-slate-700">
            <span className="truncate">{user.avatar}</span>
          </div>
        </label>

        <Link
          href="/profile/update"
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3154f4] to-[#123edb] text-sm font-semibold text-white shadow-[0_16px_30px_rgba(49,84,244,0.24)] transition-all hover:-translate-y-0.5"
        >
          <Save className="h-4.5 w-4.5" strokeWidth={2.2} />
          <span>Update Information</span>
        </Link>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
        <CircleCheck className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2.2} />
        <p className="font-semibold">Profile information is ready to update.</p>
      </div>

      <div className="mt-5 rounded-2xl border border-[#cfd8ff] bg-[#f8faff] p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#3154f4] shadow-sm">
            <Info className="h-4.5 w-4.5" strokeWidth={2.2} />
          </div>
          <div>
            <h3 className="font-bold text-[#123edb]">BetterAuth Update Flow</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The update button opens a dedicated route where students can change their name and
              image URL securely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileUpdatePreview;
