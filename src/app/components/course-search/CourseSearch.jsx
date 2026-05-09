"use client";

import { useEffect, useMemo, useState } from "react";
import CourseResultsGrid from "./CourseResultsGrid";
import CourseSearchToolbar from "./CourseSearchToolbar";

const CourseSearch = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [isFiltering, setIsFiltering] = useState(false);
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  const categories = useMemo(() => {
    return [...new Set(courses.map(course => course.category))].sort((first, second) =>
      first.localeCompare(second)
    );
  }, [courses]);

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesTitle = normalizedSearchTerm
        ? course.title.toLowerCase().includes(normalizedSearchTerm)
        : true;
      const matchesCategory =
        selectedCategory === "All Categories" || course.category === selectedCategory;

      return matchesTitle && matchesCategory;
    });
  }, [courses, normalizedSearchTerm, selectedCategory]);

  useEffect(() => {
    if (!isFiltering) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIsFiltering(false);
    }, 280);

    return () => window.clearTimeout(timer);
  }, [isFiltering, normalizedSearchTerm, selectedCategory]);

  const handleSearchChange = value => {
    setSearchTerm(value);
    setIsFiltering(true);
  };

  const handleCategoryChange = value => {
    setSelectedCategory(value);
    setIsFiltering(true);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setIsFiltering(true);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-[#e6ebff] bg-[#f8faff] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <CourseSearchToolbar
          categories={categories}
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
          onCategoryChange={handleCategoryChange}
          onSearchChange={handleSearchChange}
          onClearSearch={handleClearSearch}
        />

      </div>

      <CourseResultsGrid courses={filteredCourses} />
    </div>
  );
};

export default CourseSearch;
