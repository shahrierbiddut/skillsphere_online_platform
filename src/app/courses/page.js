import CourseSearch from "../components/course-search/CourseSearch";
import { getHomePageData } from "@/lib/homeData";

export default async function CoursesPage() {
  const { courses } = await getHomePageData();

  return (
    <main className="bg-[#f7f9ff] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[30px] border border-[#e6ebff] bg-white px-5 py-8 shadow-[0_18px_55px_rgba(19,34,86,0.06)] sm:px-7">
          <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4b5eff]">
                  All Courses
                </p>
              </div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
                Explore Our Professional Learning Tracks
              </h1>
            </div>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Browse curated courses across development, design, data, marketing, and AI. Every
              track is designed to be practical, clear, and career-focused.
            </p>
          </div>

          <CourseSearch courses={courses} />
        </section>
      </div>
    </main>
  );
}
