"use client";

import React, { startTransition, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LockKeyhole, LogIn, Mail } from "lucide-react";
import AuthField from "../Auth/AuthField";
import GoogleAuthButton from "../Auth/GoogleAuthButton";
import AuthShell from "../Auth/AuthShell";
import { useToast } from "../../components/toast/ToastProvider";

const initialForm = {
  email: "",
  password: ""
};

const Login = () => {
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

    if (!form.email.trim() || !form.password.trim()) {
      setStatus("error");
      setErrorMessage("Please enter both email and password.");
      showToast({
        type: "error",
        title: "Login failed",
        message: "Please enter both email and password."
      });
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? "Unable to sign in right now.");
      }

      setStatus("success");
      showToast({
        type: "success",
        title: "Login successful",
        message: "Redirecting you to the home page."
      });

      startTransition(() => {
        router.push("/");
        router.refresh();
      });
    } catch (error) {
      const message = error.message ?? "Unable to sign in right now.";
      setStatus("error");
      setErrorMessage(message);
      showToast({
        type: "error",
        title: "Login failed",
        message
      });
    }
  };

  return (
    <AuthShell
      icon={<LogIn className="h-7 w-7" strokeWidth={2.1} />}
      title="Login"
      subtitle="Log in to continue your learning journey."
    >
      <div className="space-y-6">
        {status === "error" && errorMessage ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            <p className="font-semibold">Unable to log in.</p>
            <p className="mt-1">{errorMessage}</p>
          </div>
        ) : null}

        <form className="space-y-4" onSubmit={handleSubmit}>
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
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            autoComplete="current-password"
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
            className="flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#3454f5] to-[#2a6bff] text-sm font-semibold text-white shadow-[0_16px_30px_rgba(52,84,245,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(52,84,245,0.32)] disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-80"
          >
            {status === "submitting" ? "Signing In..." : status === "success" ? "Redirecting..." : "Login"}
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
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-[#3454f5] hover:text-[#2745d9]">
            Register
          </Link>
        </p>
      </div>
    </AuthShell>
  );
};

export default Login;
