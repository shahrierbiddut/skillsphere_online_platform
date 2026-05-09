"use client";

export default function FeaturesSection() {
  const features = [
    {
      icon: "🎓",
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience",
    },
    {
      icon: "📚",
      title: "Comprehensive Courses",
      description: "Wide range of courses covering all skill levels",
    },
    {
      icon: "🎯",
      title: "Practical Projects",
      description: "Build real-world projects and strengthen your portfolio",
    },
    {
      icon: "⏰",
      title: "Learn at Your Pace",
      description: "Study anytime, anywhere with lifetime access to courses",
    },
    {
      icon: "🏆",
      title: "Certifications",
      description: "Earn recognized certificates upon course completion",
    },
    {
      icon: "💼",
      title: "Career Support",
      description: "Get guidance for your career growth and opportunities",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose SkillSphere?
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to succeed in your learning journey
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
