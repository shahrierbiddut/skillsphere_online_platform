import ProfileCard from "./ProfileCard";
import ProfileUpdatePreview from "./ProfileUpdatePreview";

const ProfilePageView = ({ user }) => {
  return (
    <main className="bg-[#f7f9ff] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[24rem_1fr]">
        <ProfileCard user={user} />
        <ProfileUpdatePreview user={user} />
      </div>
    </main>
  );
};

export default ProfilePageView;
