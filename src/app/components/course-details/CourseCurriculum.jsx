import { CheckCircle2, LockKeyhole } from "lucide-react";

const CourseCurriculum = ({ curriculum }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">Course Curriculum</h2>
      <div className="mt-4 overflow-hidden rounded-2xl border border-[#e1e8ff] bg-white">
        {curriculum.map((item, index) => {
          const isComplete = item.status === "complete";

          return (
            <div
              key={`${item.title}-${index}`}
              className="grid grid-cols-[2rem_1fr_auto_auto] items-center gap-3 border-b border-[#eef2ff] px-4 py-4 last:border-b-0"
            >
              <span className="text-sm font-semibold text-slate-500">{index + 1}.</span>
              <h3 className="text-sm font-semibold text-slate-800">{item.title}</h3>
              <span className="text-xs font-medium text-slate-500">{item.duration}</span>
              {isComplete ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-500" strokeWidth={2.2} />
              ) : (
                <LockKeyhole className="h-5 w-5 text-slate-400" strokeWidth={2.1} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CourseCurriculum;
