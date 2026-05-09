import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Star } from "lucide-react";
import { formatCompactCount } from "@/lib/formatters";
import CourseStats from "./CourseStats";

const CourseDetailsHero = ({ course }) => {
  const instructor = course.instructorDetails;
  const reviewCount = instructor?.students ?? 1000;

  return (
    <section className="space-y-5">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4.5 w-4.5" strokeWidth={2.2} />
          <span>Course details page - sign in to track progress and unlock lessons.</span>
        </div>
      </div>

      <Link
        href="/courses"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#3154f4] transition-colors hover:text-[#1f3ed1]"
      >
        <ArrowLeft className="h-4.5 w-4.5" strokeWidth={2.2} />
        <span>Back to courses</span>
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-[#e1e8ff] bg-[#eef2ff] shadow-[0_18px_45px_rgba(19,34,86,0.12)]">
          <Image
            src={course.image}
            alt={course.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 640px"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3154f4]">
            {course.category}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-slate-950">
            {course.title}
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <div className="relative h-13 w-13 overflow-hidden rounded-full border border-[#dbe4ff] bg-[#eef2ff]">
              <Image
                src={instructor?.image ?? "https://i.pravatar.cc/150?img=1"}
                alt={course.instructor}
                fill
                className="object-cover"
                sizes="52px"
              />
            </div>
            <div>
              <p className="font-semibold text-slate-900">{course.instructor}</p>
              <p className="text-sm text-slate-500">{instructor?.title ?? "Course Instructor"}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <div className="flex items-center gap-1.5 font-semibold text-slate-900">
              <Star className="h-5 w-5 fill-[#ffb74d] text-[#ffb74d]" strokeWidth={1.8} />
              <span>{course.rating.toFixed(1)}</span>
            </div>
            <span className="text-slate-300">|</span>
            <p className="font-medium text-slate-500">{formatCompactCount(reviewCount)}+ reviews</p>
          </div>

          <div className="mt-7">
            <CourseStats course={course} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsHero;
