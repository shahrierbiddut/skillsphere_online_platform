import { ChevronDown, Search, X } from "lucide-react";

const CourseSearchToolbar = ({
  categories,
  selectedCategory,
  searchTerm,
  onCategoryChange,
  onSearchChange,
  onClearSearch
}) => {
  return (
    <div className="grid gap-3 lg:grid-cols-[1fr_14rem]">
      <label className="relative block">
        <span className="sr-only">Search courses by title</span>
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400"
          strokeWidth={2.1}
        />
        <input
          type="search"
          value={searchTerm}
          onChange={event => onSearchChange(event.target.value)}
          placeholder="Search courses by title..."
          className="h-12 w-full rounded-xl border border-[#d8e1fb] bg-white pl-11 pr-12 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-[#3154f4] focus:ring-4 focus:ring-[#3154f4]/12"
        />
        {searchTerm ? (
          <button
            type="button"
            onClick={onClearSearch}
            className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
            aria-label="Clear course search"
          >
            <X className="h-4 w-4" strokeWidth={2.2} />
          </button>
        ) : null}
      </label>

      <label className="relative block">
        <span className="sr-only">Filter courses by category</span>
        <select
          value={selectedCategory}
          onChange={event => onCategoryChange(event.target.value)}
          className="h-12 w-full appearance-none rounded-xl border border-[#d8e1fb] bg-white px-4 pr-10 text-sm font-medium text-slate-700 outline-none transition-all focus:border-[#3154f4] focus:ring-4 focus:ring-[#3154f4]/12"
        >
          <option value="All Categories">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          strokeWidth={2.2}
        />
      </label>
    </div>
  );
};

export default CourseSearchToolbar;
