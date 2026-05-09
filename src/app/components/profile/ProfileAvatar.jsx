import { Camera } from "lucide-react";

const ProfileAvatar = ({ imageUrl, name, size = "large" }) => {
  const sizeClass = size === "large" ? "h-34 w-34" : "h-24 w-24";

  return (
    <div className={`relative mx-auto ${sizeClass}`}>
      <div
        aria-label={name}
        className="h-full w-full rounded-full border-4 border-white bg-[#eef2ff] bg-cover bg-center shadow-[0_18px_38px_rgba(19,34,86,0.18)]"
        role="img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute bottom-2 right-2 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#3154f4] text-white shadow-lg">
        <Camera className="h-4.5 w-4.5" strokeWidth={2.2} />
      </div>
    </div>
  );
};

export default ProfileAvatar;
