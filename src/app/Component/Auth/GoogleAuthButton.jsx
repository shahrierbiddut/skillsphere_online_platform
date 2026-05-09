"use client";

import React, { startTransition, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import GoogleMark from "./GoogleMark";

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

const GoogleAuthButton = ({ onSuccess, onError, disabled = false }) => {
  const router = useRouter();
  const buttonRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCredentialResponse = useCallback(async responsePayload => {
    if (!responsePayload?.credential) {
      onError?.("Google authentication failed. Please try again.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          credential: responsePayload.credential
        })
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? "Unable to authenticate with Google.");
      }

      onSuccess?.(data.user);

      startTransition(() => {
        router.push("/");
        router.refresh();
      });
    } catch (error) {
      onError?.(error.message || "Failed to authenticate with Google. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [onError, onSuccess, router]);

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID || !buttonRef.current) {
      return;
    }

    const initializeGoogleButton = () => {
      if (!window.google?.accounts?.id || !buttonRef.current) {
        return;
      }

      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse
      });

      window.google.accounts.id.renderButton(buttonRef.current, {
        theme: "outline",
        size: "large",
        text: "continue_with",
        width: buttonRef.current.offsetWidth || 320
      });
    };

    const existingScript = document.querySelector('script[src="https://accounts.google.com/gsi/client"]');

    if (existingScript) {
      initializeGoogleButton();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = initializeGoogleButton;
    script.onerror = () => {
      onError?.("Google login could not be loaded. Please try again.");
    };
    document.head.appendChild(script);
  }, [handleCredentialResponse, onError]);

  const handleMissingConfig = () => {
    onError?.("Google login is not configured. Add NEXT_PUBLIC_GOOGLE_CLIENT_ID to enable it.");
  };

  if (GOOGLE_CLIENT_ID) {
    return (
      <div
        ref={buttonRef}
        aria-disabled={disabled || isLoading}
        className={`flex min-h-12 w-full items-center justify-center overflow-hidden rounded-xl border border-[#dbe4ff] bg-white ${
          disabled || isLoading ? "pointer-events-none opacity-60" : ""
        }`}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={handleMissingConfig}
      disabled={disabled || isLoading}
      className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-[#dbe4ff] bg-white text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-[#bfcdfd] hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <GoogleMark />
      <span>{isLoading ? "Authenticating..." : "Continue with Google"}</span>
    </button>
  );
};

export default GoogleAuthButton;
