import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProfileCard from "./ProfileCard";
import ProfileUpdateForm from "./ProfileUpdateForm";
import ProfileUpdateHelp from "./ProfileUpdateHelp";

const ProfileUpdatePageView = ({ user }) => {
  return (
    <main className="bg-[#f7f9ff] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/profile"
          className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#3154f4] transition-colors hover:text-[#123edb]"
        >
          <ArrowLeft className="h-4.5 w-4.5" strokeWidth={2.2} />
          <span>Back to profile</span>
        </Link>

        <div className="grid gap-6 lg:grid-cols-[24rem_1fr]">
          <ProfileCard user={user} />
          <div className="space-y-5">
            <ProfileUpdateForm user={user} />
            <ProfileUpdateHelp />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileUpdatePageView;
