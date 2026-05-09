"use client";

export default function StatsSection() {
  const stats = [
    { label: "Active Students", value: "50K+" },
    { label: "Expert Instructors", value: "500+" },
    { label: "Courses Available", value: "1000+" },
    { label: "Success Rate", value: "95%" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <p className="text-blue-100 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
