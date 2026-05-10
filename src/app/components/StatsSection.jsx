"use client";

const STATISTICS = [
  { label: "Active Students", value: "50K+", icon: "👥" },
  { label: "Expert Instructors", value: "500+", icon: "👨‍🏫" },
  { label: "Courses Available", value: "1000+", icon: "📚" },
  { label: "Success Rate", value: "95%", icon: "🎯" }
];

export default function StatsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATISTICS.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <p className="text-blue-100 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
