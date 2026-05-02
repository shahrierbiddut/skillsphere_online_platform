import React from 'react';

const LoggedInNav = ({ userAvatar, userName, onLogout }) => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#cfd8ff] bg-[#eef2ff] shadow-sm">
                {userAvatar ? (
                    <img src={userAvatar} alt={userName} className="w-full h-full object-cover" />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#5b4df5] via-[#3f7cff] to-[#2d6bff] text-lg font-bold text-white">
                        {userName?.charAt(0).toUpperCase()}
                    </div>
                )}
            </div>
            <button
                onClick={onLogout}
                className="rounded-2xl border border-[#cfd8ff] px-6 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-[#3555f6] hover:bg-[#f5f7ff] hover:text-[#3555f6]"
            >
                Logout
            </button>
        </div>
    );
};

export default LoggedInNav;
