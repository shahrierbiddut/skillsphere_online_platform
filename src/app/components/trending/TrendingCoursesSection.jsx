import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { formatCompactCount } from "@/lib/formatters";
import SectionHeading from "../home/SectionHeading";

const TrendingCoursesSection = ({ courses }) => {
  return (
    <section className="rounded-[28px] bg-white px-5 py-6 shadow-[0_18px_55px_rgba(19,34,86,0.06)] sm:px-6">
      <SectionHeading
        title="Trending Courses"
        subtitle="Fresh favorites learners are exploring right now."
        actionHref="/courses"
      />

      <div className="grid gap-4 lg:grid-cols-4">
        {courses.map(course => (
          <Link
            key={course.id}
            href={`/courses/${course.id}`}
            className="flex gap-4 rounded-[22px] border border-[#e6ebff] bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(19,34,86,0.1)]"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div className="min-w-0">
              <h3 className="line-clamp-2 text-sm font-semibold leading-6 text-slate-900">{course.title}</h3>
              <p className="mt-1 truncate text-xs text-slate-500">{course.instructor}</p>
              <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                <Star className="h-4 w-4 fill-[#ffb74d] text-[#ffb74d]" strokeWidth={1.8} />
                <span>{course.rating.toFixed(1)}</span>
                <span className="font-normal text-slate-500">
                  ({formatCompactCount(course.instructorDetails?.students ?? 1000)})
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TrendingCoursesSection;
