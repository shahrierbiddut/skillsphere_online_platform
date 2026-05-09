import { BookOpenCheck } from "lucide-react";
import CourseCard from "../home/CourseCard";

const CourseResultsGrid = ({ courses }) => {
  if (!courses.length) {
    return (
      <div className="rounded-3xl border border-dashed border-[#c7d2fe] bg-[#f8faff] px-5 py-14 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#3154f4] shadow-sm">
          <BookOpenCheck className="h-7 w-7" strokeWidth={2.1} />
        </div>
        <h2 className="mt-5 text-xl font-semibold text-slate-900">No courses found</h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
          Try a different title or choose another category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} anchorId={`course-${course.id}`} />
      ))}
    </div>
  );
};

export default CourseResultsGrid;
