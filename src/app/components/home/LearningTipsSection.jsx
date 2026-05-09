import { Clock3, NotebookText, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";

const tips = [
  {
    title: "Study Techniques",
    description: "Break down lessons into focused sprints, take notes actively, and review with quick recap sessions.",
    accent: "from-[#f1e9ff] to-[#faf6ff]",
    border: "border-[#e6d9ff]",
    iconColor: "text-[#7a5cff]",
    Icon: NotebookText
  },
  {
    title: "Time Management",
    description: "Plan your day with one clear study goal and protect distraction-free blocks for deep work.",
    accent: "from-[#fff2ef] to-[#fffaf7]",
    border: "border-[#ffd9cf]",
    iconColor: "text-[#ff6b5f]",
    Icon: Clock3
  },
  {
    title: "Consistency",
    description: "Small daily progress compounds fast. Aim for steady weekly momentum instead of occasional bursts.",
    accent: "from-[#eef3ff] to-[#f8fbff]",
    border: "border-[#d9e4ff]",
    iconColor: "text-[#5a67ff]",
    Icon: Target
  }
];

const LearningTipsSection = () => {
  return (
    <section className="rounded-[28px] bg-white px-5 py-6 shadow-[0_18px_55px_rgba(19,34,86,0.06)] sm:px-6">
      <SectionHeading
        title="Learning Tips"
        subtitle="Simple habits that help learners stay sharp, organized, and motivated."
        actionHref="/courses"
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {tips.map(({ title, description, accent, border, iconColor, Icon }) => (
          <article
            key={title}
            className={`rounded-[22px] border bg-gradient-to-br p-5 ${accent} ${border}`}
          >
            <div className="flex items-start gap-4">
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white ${iconColor} shadow-sm`}>
                <Icon className="h-7 w-7" strokeWidth={2.1} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LearningTipsSection;
