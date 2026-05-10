"use client";

const FEATURES = [
  {
    icon: "🎓",
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of hands-on experience"
  },
  {
    icon: "📚",
    title: "Comprehensive Courses",
    description: "Wide range of courses covering all skill levels from beginner to advanced"
  },
  {
    icon: "🎯",
    title: "Practical Projects",
    description: "Build real-world projects and strengthen your professional portfolio"
  },
  {
    icon: "⏰",
    title: "Learn at Your Pace",
    description: "Study anytime, anywhere with lifetime access to all course materials"
  },
  {
    icon: "🏆",
    title: "Recognized Certifications",
    description: "Earn industry-recognized certificates upon successful course completion"
  },
  {
    icon: "💼",
    title: "Career Support",
    description: "Get guidance for your career growth and unlock new opportunities"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose SkillSphere?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to succeed in your learning journey with comprehensive support and resources
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
