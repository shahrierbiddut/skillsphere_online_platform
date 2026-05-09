import { notFound } from "next/navigation";
import CourseDetailsView from "../../components/course-details/CourseDetailsView";
import { getCourseById, getCourseIds } from "@/lib/homeData";

export async function generateStaticParams() {
  const ids = await getCourseIds();

  return ids.map(id => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = await getCourseById(id);

  if (!course) {
    return {
      title: "Course Not Found - SkillSphere"
    };
  }

  return {
    title: `${course.title} - SkillSphere`,
    description: course.description
  };
}

export default async function CourseDetailsPage({ params }) {
  const { id } = await params;
  const course = await getCourseById(id);

  if (!course) {
    notFound();
  }

  return <CourseDetailsView course={course} />;
}
