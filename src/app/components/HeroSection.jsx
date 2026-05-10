import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 text-white py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                    Welcome to SkillSphere
                </h1>
                <p className="text-xl sm:text-2xl text-blue-50 mb-10 leading-relaxed">
                    Learn from industry experts and master in-demand skills with our comprehensive online learning platform
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                        href="/courses"
                        className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                        Explore Courses
                    </Link>
                    <Link 
                        href="/register"
                        className="inline-flex items-center justify-center px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg border-2 border-white hover:bg-blue-800 transition-colors duration-200"
                    >
                        Get Started Free
                    </Link>
                </div>
            </div>
        </section>
    );
}
