import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SectionHeading = ({ title, subtitle, actionHref, actionLabel = "View all" }) => {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.75rem]">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}
      </div>

      {actionHref ? (
        <Link
          href={actionHref}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[#3454f5] transition-colors hover:text-[#2745d9]"
        >
          <span>{actionLabel}</span>
          <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
        </Link>
      ) : null}
    </div>
  );
};

export default SectionHeading;
