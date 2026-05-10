"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
          Join thousands of students already learning and growing with SkillSphere. Start for free today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/register"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-xl transform hover:scale-105"
          >
            Create Free Account
          </Link>
          <Link
            href="/courses"
            className="px-8 py-4 border-2 border-blue-600 text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 hover:shadow-xl"
          >
            Explore All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
