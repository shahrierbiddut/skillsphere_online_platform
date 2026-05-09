import CourseCard from "./CourseCard";
import SectionHeading from "./SectionHeading";

const PopularCoursesSection = ({ courses }) => {
  return (
    <section className="rounded-[28px] bg-white px-5 py-6 shadow-[0_18px_55px_rgba(19,34,86,0.06)] sm:px-6">
      <SectionHeading
        title="Popular Courses"
        subtitle="Top-rated programs handpicked from our most loved learning tracks."
        actionHref="/courses"
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default PopularCoursesSection;
