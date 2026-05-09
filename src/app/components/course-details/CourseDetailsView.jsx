import CourseCurriculum from "./CourseCurriculum";
import CourseDetailsHero from "./CourseDetailsHero";

const CourseDetailsView = ({ course }) => {
  return (
    <main className="bg-[#f7f9ff] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <article className="rounded-[30px] border border-[#e6ebff] bg-white px-5 py-6 shadow-[0_18px_55px_rgba(19,34,86,0.06)] sm:px-7">
          <CourseDetailsHero course={course} />

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_24rem]">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Description</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{course.description}</p>
              </section>

              <CourseCurriculum curriculum={course.curriculum} />
            </div>

            <aside className="h-fit rounded-3xl border border-[#e1e8ff] bg-[#f8faff] p-6 lg:mt-36">
              <h2 className="text-lg font-bold text-slate-900">What you will learn</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <li>Build practical confidence through structured lessons.</li>
                <li>Understand the core concepts behind {course.category.toLowerCase()} work.</li>
                <li>Practice with focused tasks and real-world examples.</li>
                <li>Prepare for project-based learning and portfolio growth.</li>
              </ul>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
};

export default CourseDetailsView;
