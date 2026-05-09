"use client";

import React, { startTransition, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, Link2, LockKeyhole, Mail, UserRound, UserRoundPlus } from "lucide-react";
import AuthField from "../Auth/AuthField";
import GoogleAuthButton from "../Auth/GoogleAuthButton";
import AuthShell from "../Auth/AuthShell";
import { useToast } from "../../components/toast/ToastProvider";

const initialForm = {
  name: "",
  email: "",
  photoUrl: "",
  password: ""
};

const Registration = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const [form, setForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = event => {
    const { name, value } = event.target;
    setForm(current => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setErrorMessage("");

    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      setStatus("error");
      setErrorMessage("Name, email, and password are required.");
      showToast({
        type: "error",
        title: "Registration failed",
        message: "Name, email, and password are required."
      });
      return;
    }

    if (form.password.trim().length < 6) {
      setStatus("error");
      setErrorMessage("Password must be at least 6 characters long.");
      showToast({
        type: "error",
        title: "Registration failed",
        message: "Password must be at least 6 characters long."
      });
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? "Unable to register right now.");
      }

      setStatus("success");
      setForm(initialForm);
      showToast({
        type: "success",
        title: "Registration successful",
        message: "Please log in with your new account."
      });

      startTransition(() => {
        router.push("/login");
      });
    } catch (error) {
      const message = error.message ?? "Unable to register right now.";
      setStatus("error");
      setErrorMessage(message);
      showToast({
        type: "error",
        title: "Registration failed",
        message
      });
    }
  };

  return (
    <AuthShell
      icon={<UserRoundPlus className="h-7 w-7" strokeWidth={2.1} />}
      title="Registration"
      subtitle="Join SkillSphere and start learning today."
    >
      <div className="space-y-6">
        {status === "error" && errorMessage ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            <p className="font-semibold">Unable to register.</p>
            <p className="mt-1">{errorMessage}</p>
          </div>
        ) : null}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <AuthField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            autoComplete="name"
            icon={UserRound}
            disabled={status === "submitting" || status === "success"}
          />
          <AuthField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            autoComplete="email"
            icon={Mail}
            disabled={status === "submitting" || status === "success"}
          />
          <AuthField
            label="Photo URL"
            name="photoUrl"
            value={form.photoUrl}
            onChange={handleChange}
            placeholder="https://example.com/avatar.jpg"
            autoComplete="url"
            icon={Link2}
            disabled={status === "submitting" || status === "success"}
          />
          <AuthField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            placeholder="Create a strong password"
            autoComplete="new-password"
            icon={LockKeyhole}
            disabled={status === "submitting" || status === "success"}
            endAdornment={
              <button
                type="button"
                onClick={() => setShowPassword(current => !current)}
                disabled={status === "submitting" || status === "success"}
                className="rounded-full p-1 text-slate-400 transition-colors hover:text-slate-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4.5 w-4.5" strokeWidth={2} />
                ) : (
                  <Eye className="h-4.5 w-4.5" strokeWidth={2} />
                )}
              </button>
            }
          />

          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#3454f5] to-[#2a6bff] text-sm font-semibold text-white shadow-[0_16px_30px_rgba(52,84,245,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(52,84,245,0.32)] disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-80"
          >
            <span>{status === "submitting" || status === "success" ? "Registering..." : "Register"}</span>
            {status !== "submitting" && status !== "success" && <ArrowRight className="h-4.5 w-4.5" strokeWidth={2.2} />}
          </button>
        </form>

        <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
          <span className="h-px flex-1 bg-[#e7ebff]" />
          <span>or</span>
          <span className="h-px flex-1 bg-[#e7ebff]" />
        </div>

        <GoogleAuthButton
          disabled={status === "submitting" || status === "success"}
          onError={message => {
            setStatus("error");
            setErrorMessage(message);
            showToast({
              type: "error",
              title: "Google login failed",
              message
            });
          }}
        />

        <p className="text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-[#3454f5] hover:text-[#2745d9]">
            Login
          </Link>
        </p>
      </div>
    </AuthShell>
  );
};

export default Registration;
