import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { formatCompactCount } from "@/lib/formatters";

const CourseCard = ({ course, compact = false, anchorId }) => {
  const cardBodyClass = compact ? "p-4" : "p-5";
  const titleClass = compact ? "text-base" : "text-lg";
  const imageHeightClass = compact ? "h-40" : "h-48";

  return (
    <Link
      href={`/courses/${course.id}`}
      id={anchorId}
      className="block overflow-hidden rounded-[24px] border border-[#e6ebff] bg-white shadow-[0_14px_40px_rgba(19,34,86,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(19,34,86,0.12)]"
    >
      <div className={`relative ${imageHeightClass} overflow-hidden`}>
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          sizes={compact ? "(max-width: 1024px) 100vw, 260px" : "(max-width: 1024px) 100vw, 360px"}
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 py-4">
          <span className="rounded-full border border-white/20 bg-[#08103f]/72 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
            {course.category}
          </span>
          <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
            {course.level}
          </span>
        </div>
      </div>

      <div className={cardBodyClass}>
        <h3 className={`${titleClass} font-semibold leading-snug text-slate-900`}>{course.title}</h3>

        <div className="mt-4 flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[#dbe4ff]">
            <Image
              src={course.instructorDetails?.image ?? "https://i.pravatar.cc/150?img=1"}
              alt={course.instructor}
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-800">{course.instructor}</p>
            <p className="truncate text-xs text-slate-500">
              {course.instructorDetails?.title ?? "Course Instructor"}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-800">
            <Star className="h-4.5 w-4.5 fill-[#ffb74d] text-[#ffb74d]" strokeWidth={1.8} />
            <span>{course.rating.toFixed(1)}</span>
            <span className="font-normal text-slate-500">
              ({formatCompactCount(course.instructorDetails?.students ?? 1000)})
            </span>
          </div>

          <span className="inline-flex h-9 items-center justify-center rounded-lg bg-gradient-to-r from-[#4b5eff] to-[#3554f6] px-4 text-xs font-semibold text-white shadow-[0_12px_22px_rgba(53,84,246,0.22)] transition-all duration-200">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
