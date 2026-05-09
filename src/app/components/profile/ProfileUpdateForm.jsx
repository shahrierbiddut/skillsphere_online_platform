"use client";

import { useState, startTransition } from "react";
import { useRouter } from "next/navigation";
import { CircleCheck, Info, Save, UserPen } from "lucide-react";
import { useToast } from "../toast/ToastProvider";
import ProfileAvatar from "./ProfileAvatar";

const ProfileUpdateForm = ({ user }) => {
  const router = useRouter();
  const { showToast } = useToast();
  const [form, setForm] = useState({
    name: user.name,
    photoUrl: user.avatar
  });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(current => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setMessage("");

    if (!form.name.trim() || !form.photoUrl.trim()) {
      const errorMessage = "Name and image URL are required.";
      setStatus("error");
      setMessage(errorMessage);
      showToast({ type: "error", title: "Update failed", message: errorMessage });
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/auth/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? "Unable to update profile.");
      }

      setStatus("success");
      setMessage(data.message);
      showToast({
        type: "success",
        title: "Profile updated",
        message: "Your latest information has been saved."
      });

      startTransition(() => {
        router.refresh();
        router.push("/profile");
      });
    } catch (error) {
      const errorMessage = error.message ?? "Unable to update profile.";
      setStatus("error");
      setMessage(errorMessage);
      showToast({ type: "error", title: "Update failed", message: errorMessage });
    }
  };

  return (
    <section className="rounded-[28px] border border-[#dfe6ff] bg-white p-6 shadow-[0_18px_55px_rgba(19,34,86,0.08)]">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#3154f4]">
          <UserPen className="h-5.5 w-5.5" strokeWidth={2.2} />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-950">Update Information</h1>
          <p className="mt-1 text-sm text-slate-500">Update your profile details below.</p>
        </div>
      </div>

      <div className="mt-7">
        <ProfileAvatar imageUrl={form.photoUrl} name={form.name} size="small" />
      </div>

      <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">Name</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-[#d8e1fb] bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#3154f4] focus:ring-4 focus:ring-[#3154f4]/12"
            placeholder="John Doe"
            disabled={status === "submitting"}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">Image URL</span>
          <input
            name="photoUrl"
            value={form.photoUrl}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-[#d8e1fb] bg-white px-4 text-sm text-slate-900 outline-none transition-all focus:border-[#3154f4] focus:ring-4 focus:ring-[#3154f4]/12"
            placeholder="https://i.pravatar.cc/150?img=12"
            disabled={status === "submitting"}
          />
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3154f4] to-[#123edb] text-sm font-semibold text-white shadow-[0_16px_30px_rgba(49,84,244,0.24)] transition-all hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Save className="h-4.5 w-4.5" strokeWidth={2.2} />
          <span>{status === "submitting" ? "Updating..." : "Update Information"}</span>
        </button>
      </form>

      {message ? (
        <div
          className={`mt-5 flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${
            status === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-rose-200 bg-rose-50 text-rose-700"
          }`}
        >
          {status === "success" ? (
            <CircleCheck className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2.2} />
          ) : (
            <Info className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={2.2} />
          )}
          <p className="font-semibold">{message}</p>
        </div>
      ) : null}
    </section>
  );
};

export default ProfileUpdateForm;
