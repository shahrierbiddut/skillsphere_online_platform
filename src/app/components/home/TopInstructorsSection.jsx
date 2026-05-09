import InstructorCard from "./InstructorCard";
import SectionHeading from "./SectionHeading";

const TopInstructorsSection = ({ instructors }) => {
  return (
    <section className="rounded-[28px] bg-white px-5 py-6 shadow-[0_18px_55px_rgba(19,34,86,0.06)] sm:px-6">
      <SectionHeading
        title="Top Instructors"
        subtitle="Meet the mentors helping learners turn curiosity into career-ready skills."
        actionHref="/courses"
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {instructors.map(instructor => (
          <InstructorCard key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </section>
  );
};

export default TopInstructorsSection;
