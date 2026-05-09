import HomeHeroSlider from "./components/home/HomeHeroSlider";
import LearningTipsSection from "./components/home/LearningTipsSection";
import PopularCoursesSection from "./components/home/PopularCoursesSection";
import TopInstructorsSection from "./components/home/TopInstructorsSection";
import TrendingCoursesSection from "./components/trending/TrendingCoursesSection";
import { getHomePageData } from "@/lib/homeData";

export default async function Home() {
  const { popularCourses, topInstructors, trendingCourses } = await getHomePageData();
  const heroMessages = [
    {
      title: "Upgrade Your Skills Today",
      highlight: "Learn from Industry Experts",
      emoji: String.fromCodePoint(0x1f680)
    },
    {
      title: "Learn from Industry Experts",
      highlight: "Build Portfolio-Ready Projects",
      emoji: String.fromCodePoint(0x2728)
    },
    {
      title: "Upgrade Your Skills Today",
      highlight: "Start Your Next Career Chapter",
      emoji: String.fromCodePoint(0x1f525)
    }
  ];

  const slides = popularCourses.map((course, index) => ({
    ...heroMessages[index % heroMessages.length],
    eyebrow: "SkillSphere spotlight",
    description:
      `Explore ${course.title} with ${course.instructor} and grow your ${course.category.toLowerCase()} skills through ${course.duration} of guided learning.`,
    kicker: "Featured mentor",
    kickerDetail: course.instructor,
    previewLabel: `${course.duration} guided learning`,
    course,
    metrics: [
      {
        label: "rating",
        value: course.rating.toFixed(1)
      },
      {
        label: "level",
        value: course.level
      },
      {
        label: "track",
        value: course.category
      }
    ]
  }));

  return (
    <main className="bg-[#f7f9ff] pb-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:px-8">
        <HomeHeroSlider slides={slides} />
        <PopularCoursesSection courses={popularCourses} />
        <LearningTipsSection />
        <TopInstructorsSection instructors={topInstructors} />
        <TrendingCoursesSection courses={trendingCourses} />
      </div>
    </main>
  );
}
