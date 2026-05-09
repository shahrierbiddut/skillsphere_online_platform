import { BarChart3, Clock3, Code2 } from "lucide-react";

const CourseStats = ({ course }) => {
  const stats = [
    {
      label: "Duration",
      value: course.duration,
      icon: Clock3
    },
    {
      label: "Level",
      value: course.level,
      icon: BarChart3
    },
    {
      label: "Category",
      value: course.category,
      icon: Code2
    }
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {stats.map(stat => {
        const Icon = stat.icon;

        return (
          <div key={stat.label} className="rounded-2xl border border-[#e1e8ff] bg-white p-4">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef2ff] text-[#3154f4]">
              <Icon className="h-5 w-5" strokeWidth={2.1} />
            </div>
            <p className="text-sm font-semibold text-slate-900">{stat.value}</p>
            <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CourseStats;
