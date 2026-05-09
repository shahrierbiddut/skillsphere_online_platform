import Image from "next/image";
import { BookOpenText, Star, Users } from "lucide-react";
import { formatCompactCount } from "@/lib/formatters";

const InstructorCard = ({ instructor }) => {
  return (
    <article className="rounded-[24px] border border-[#e6ebff] bg-white p-5 shadow-[0_14px_40px_rgba(19,34,86,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(19,34,86,0.12)]">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full border border-[#dbe4ff] shadow-sm">
          <Image
            src={instructor.image}
            alt={instructor.name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold text-slate-900">{instructor.name}</h3>
          <p className="truncate text-sm text-slate-500">{instructor.title}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{instructor.expertise}</p>

      <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-[#edf1ff] pt-4 text-sm">
        <div className="flex items-center gap-1.5 font-semibold text-slate-800">
          <Star className="h-4.5 w-4.5 fill-[#ffb74d] text-[#ffb74d]" strokeWidth={1.8} />
          <span>{instructor.rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500">
          <Users className="h-4.5 w-4.5 text-[#5669ff]" strokeWidth={2} />
          <span>{formatCompactCount(instructor.students)} learners</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-500">
          <BookOpenText className="h-4.5 w-4.5 text-[#5669ff]" strokeWidth={2} />
          <span>{instructor.courses} courses</span>
        </div>
      </div>
    </article>
  );
};

export default InstructorCard;
