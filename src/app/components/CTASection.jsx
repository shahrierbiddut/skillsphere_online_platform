"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Learning?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Join thousands of students already learning on SkillSphere
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            href="/register"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-lg"
          >
            Sign Up Now
          </Link>
          <Link
            href="/courses"
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
