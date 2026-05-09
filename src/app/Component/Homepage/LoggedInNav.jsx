import React from "react";

const LoggedInNav = ({ userAvatar, userName, onLogout }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
      <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#d5defd] bg-[#eef2ff] shadow-sm">
        {userAvatar ? (
          <div
            aria-label={userName}
            className="h-full w-full bg-cover bg-center"
            role="img"
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#4b5eff] to-[#3554f6] text-base font-bold text-white">
            {userName?.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <button
        onClick={onLogout}
        className="rounded-xl border border-[#d5defd] px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-[#3454f5] hover:bg-[#f5f7ff] hover:text-[#3454f5]"
      >
        Logout
      </button>
    </div>
  );
};

export default LoggedInNav;
