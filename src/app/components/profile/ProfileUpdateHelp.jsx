import { Info } from "lucide-react";

const ProfileUpdateHelp = () => {
  return (
    <aside className="rounded-[28px] border border-[#cfd8ff] bg-[#f8faff] p-6">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#3154f4] shadow-sm">
          <Info className="h-5 w-5" strokeWidth={2.2} />
        </div>
        <div>
          <h2 className="font-bold text-slate-950">BetterAuth Update Flow</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            The profile update route keeps the form separate from the display page and refreshes
            your session after saving the latest name and image URL.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default ProfileUpdateHelp;
