"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, PlayCircle, Rocket, Sparkles } from "lucide-react";

const HomeHeroSlider = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!slides.length) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveIndex(current => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [slides]);

  if (!slides.length) {
    return null;
  }

  const slide = slides[activeIndex];
  const goToSlide = index => {
    const safeIndex = (index + slides.length) % slides.length;
    setActiveIndex(safeIndex);
  };

  return (
    <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#1438a8] via-[#2353eb] to-[#244ad8] px-5 py-8 text-white shadow-[0_28px_70px_rgba(35,83,235,0.28)] sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[45%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute left-1/2 top-12 h-28 w-28 rounded-full border border-white/12" />
      <div className="pointer-events-none absolute right-16 top-10 h-3 w-3 rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.7)]" />
      <div className="pointer-events-none absolute right-28 top-24 h-2 w-2 rounded-full bg-white/60 shadow-[0_0_14px_rgba(255,255,255,0.7)]" />
      <div className="pointer-events-none absolute bottom-10 left-8 h-32 w-32 rounded-full bg-white/6 blur-2xl" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.4} />
            <span>{slide.eyebrow}</span>
          </div>

          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {slide.title} <span className="inline-block align-middle">{slide.emoji}</span>
          </h1>
          <h2 className="mt-3 text-2xl font-semibold text-white/95 sm:text-[2rem]">{slide.highlight}</h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/78 sm:text-lg">
            {slide.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/courses"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-[#244ad8] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f7f9ff]"
            >
              Explore Courses
            </Link>
            <Link
              href="/register"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/24 bg-white/10 px-6 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/14"
            >
              Get Started
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {slide.metrics.map(metric => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/14 bg-white/8 px-4 py-3 backdrop-blur"
              >
                <p className="text-lg font-semibold">{metric.value}</p>
                <p className="text-xs uppercase tracking-[0.14em] text-white/70">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[290px]">
          <button
            type="button"
            onClick={() => goToSlide(activeIndex - 1)}
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/18 bg-white/12 text-white backdrop-blur transition-colors hover:bg-white/18 lg:flex"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.3} />
          </button>

          <button
            type="button"
            onClick={() => goToSlide(activeIndex + 1)}
            aria-label="Next slide"
            className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/18 bg-white/12 text-white backdrop-blur transition-colors hover:bg-white/18 lg:flex"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2.3} />
          </button>

          <div className="relative mx-auto flex max-w-sm items-center justify-center">
            <div className="absolute -right-2 top-0 rounded-2xl border border-white/18 bg-white/10 px-4 py-3 text-sm backdrop-blur">
              <p className="font-semibold text-white">{slide.kicker}</p>
              <p className="mt-1 text-white/70">{slide.kickerDetail}</p>
            </div>

            <div className="absolute -left-1 bottom-5 rounded-2xl border border-white/18 bg-white/10 px-4 py-3 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <PlayCircle className="h-4.5 w-4.5 text-[#ffd66b]" strokeWidth={2.1} />
                <span>{slide.previewLabel}</span>
              </div>
            </div>

            <div className="absolute bottom-0 right-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#3752f7] shadow-[0_16px_24px_rgba(6,17,70,0.22)]">
              <Rocket className="h-7 w-7" strokeWidth={2.2} />
            </div>

            <div className="relative h-[290px] w-full overflow-hidden rounded-[30px] border border-white/16 bg-gradient-to-br from-[#0f1f7a] via-[#15279a] to-[#1f3bc5] p-5 shadow-[0_24px_60px_rgba(9,21,79,0.34)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_38%)]" />
              <div className="absolute -right-10 top-12 h-36 w-36 rounded-full border border-white/10" />
              <div className="relative flex h-full flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/65">Featured Track</p>
                    <h3 className="mt-1 text-lg font-semibold">{slide.course.title}</h3>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                    {slide.course.category}
                  </span>
                </div>

                <div className="relative flex-1 overflow-hidden rounded-[24px] border border-white/12">
                  <Image
                    src={slide.course.image}
                    alt={slide.course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 320px"
                    priority={activeIndex === 0}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08103f]/92 to-transparent px-4 pb-4 pt-10">
                    <p className="text-sm font-semibold">{slide.course.instructor}</p>
                    <p className="mt-1 text-xs text-white/72">{slide.course.level} | {slide.course.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 lg:hidden">
            {slides.map((item, index) => (
              <button
                key={`${item.title}-${index}`}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/35"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSlider;
