import { readFile } from "fs/promises";
import path from "path";

async function readPublicJson(filename) {
  const filePath = path.join(process.cwd(), "public", filename);

  try {
    const file = await readFile(filePath, "utf8");
    const data = JSON.parse(file);

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(`Unable to read ${filename}:`, error);
    return [];
  }
}

function normalizeCourse(course, index) {
  const id = course.id ?? index + 1;
  const category = course.category || "General";
  const title = course.title || "Untitled Course";

  return {
    id,
    title,
    category,
    level: course.level || "Beginner",
    duration: course.duration || "Self-paced",
    instructor: course.instructor || "SkillSphere Instructor",
    image: course.image || "/Logo.png",
    rating: Number.isFinite(Number(course.rating)) ? Number(course.rating) : 4.5,
    description:
      course.description ||
      `Learn ${title.toLowerCase()} through structured lessons, practical examples, and guided projects.`,
    curriculum: Array.isArray(course.curriculum) && course.curriculum.length
      ? course.curriculum
      : createDefaultCurriculum(title, category)
  };
}

function createDefaultCurriculum(title, category) {
  const categoryTopics = {
    AI: ["AI Concepts", "Model Workflow", "Evaluation", "Applied Project"],
    "Data Science": ["Data Cleaning", "Analysis Basics", "Visualization", "Practical Dataset"],
    Design: ["Design Principles", "Wireframes", "Prototyping", "Usability Review"],
    Development: ["HTML & CSS Basics", "JavaScript Fundamentals", "React Introduction", "Project Deployment"],
    Marketing: ["Audience Research", "SEO Basics", "Content Strategy", "Campaign Analytics"]
  };
  const topics = categoryTopics[category] ?? ["Course Foundations", "Core Concepts", "Hands-on Practice", "Final Project"];

  return [
    {
      title: `${title} Overview`,
      duration: "45 min",
      status: "complete"
    },
    ...topics.map((topic, index) => ({
      title: topic,
      duration: `${index + 1}h ${index % 2 === 0 ? "20" : "10"}m`,
      status: index < 1 ? "complete" : "locked"
    }))
  ];
}

function normalizeInstructor(instructor, index) {
  const id = instructor.id ?? index + 1;

  return {
    id,
    name: instructor.name || "SkillSphere Instructor",
    title: instructor.title || "Course Instructor",
    expertise: instructor.expertise || "Professional skills training",
    experience: instructor.experience || "Experienced mentor",
    rating: Number.isFinite(Number(instructor.rating)) ? Number(instructor.rating) : 4.5,
    students: Number.isFinite(Number(instructor.students)) ? Number(instructor.students) : 1000,
    courses: Number.isFinite(Number(instructor.courses)) ? Number(instructor.courses) : 1,
    bio: instructor.bio || "This instructor helps learners build practical, career-ready skills.",
    image: instructor.image || "https://i.pravatar.cc/150?img=1"
  };
}

export async function getHomePageData() {
  const [rawCourses, rawInstructors] = await Promise.all([
    readPublicJson("course.json"),
    readPublicJson("instructors.json")
  ]);
  const courses = rawCourses.map(normalizeCourse);
  const instructors = rawInstructors.map(normalizeInstructor);

  const instructorMap = new Map(instructors.map(instructor => [instructor.name, instructor]));
  const enrichedCourses = courses.map(course => ({
    ...course,
    instructorDetails: instructorMap.get(course.instructor) ?? null
  }));

  const sortedCourses = [...enrichedCourses].sort((first, second) => {
    if (second.rating !== first.rating) {
      return second.rating - first.rating;
    }

    return first.title.localeCompare(second.title);
  });

  const popularCourses = sortedCourses.slice(0, 3);
  const trendingCourses = sortedCourses.slice(0, 4);
  const topInstructors = [...instructors]
    .sort((first, second) => {
      if (second.rating !== first.rating) {
        return second.rating - first.rating;
      }

      return second.students - first.students;
    })
    .slice(0, 4);

  return {
    courses: enrichedCourses,
    instructors,
    popularCourses,
    trendingCourses,
    topInstructors
  };
}

export async function getCourseById(id) {
  const { courses } = await getHomePageData();

  return courses.find(course => String(course.id) === String(id)) ?? null;
}

export async function getCourseIds() {
  const { courses } = await getHomePageData();

  return courses.map(course => String(course.id));
}
