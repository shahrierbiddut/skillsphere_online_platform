"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { CheckCircle2, Info, X, XCircle } from "lucide-react";

const ToastContext = createContext(null);

const toastStyles = {
  success: {
    icon: CheckCircle2,
    border: "border-emerald-200",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    text: "text-emerald-900"
  },
  error: {
    icon: XCircle,
    border: "border-rose-200",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
    text: "text-rose-900"
  },
  info: {
    icon: Info,
    border: "border-blue-200",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    text: "text-blue-900"
  }
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback(id => {
    setToasts(current => current.filter(toast => toast.id !== id));
  }, []);

  const showToast = useCallback(
    ({ title, message, type = "info" }) => {
      const id = crypto.randomUUID();

      setToasts(current => [
        ...current,
        {
          id,
          type,
          title,
          message
        }
      ]);

      window.setTimeout(() => removeToast(id), 4200);
    },
    [removeToast]
  );

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-4 top-24 z-[80] flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-3">
        {toasts.map(toast => {
          const style = toastStyles[toast.type] ?? toastStyles.info;
          const Icon = style.icon;

          return (
            <div
              key={toast.id}
              className={`flex items-start gap-3 rounded-2xl border ${style.border} ${style.bg} px-4 py-3 shadow-[0_18px_40px_rgba(19,34,86,0.14)]`}
              role="status"
            >
              <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${style.iconColor}`} strokeWidth={2.2} />
              <div className={`min-w-0 flex-1 text-sm ${style.text}`}>
                <p className="font-semibold">{toast.title}</p>
                {toast.message ? <p className="mt-1 leading-5 opacity-85">{toast.message}</p> : null}
              </div>
              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                className="rounded-full p-1 text-slate-400 transition-colors hover:bg-white/70 hover:text-slate-700"
                aria-label="Dismiss notification"
              >
                <X className="h-4 w-4" strokeWidth={2.2} />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used inside ToastProvider.");
  }

  return context;
}
