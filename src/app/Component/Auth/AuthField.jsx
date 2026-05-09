import React from "react";

const AuthField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete,
  icon: Icon,
  endAdornment,
  disabled = false
}) => {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      <div className="relative">
        {Icon ? (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Icon className="h-4.5 w-4.5" strokeWidth={2} />
          </span>
        ) : null}
        <input
          className={`h-12 w-full rounded-xl border border-[#dbe4ff] bg-white px-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[#4c63ff] focus:ring-4 focus:ring-[#4c63ff]/12 ${
            Icon ? "pl-11" : ""
          } ${endAdornment ? "pr-12" : ""} ${disabled ? "cursor-not-allowed bg-slate-50" : ""}`}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
        />
        {endAdornment ? (
          <div className="absolute inset-y-0 right-3 flex items-center">{endAdornment}</div>
        ) : null}
      </div>
    </label>
  );
};

export default AuthField;
