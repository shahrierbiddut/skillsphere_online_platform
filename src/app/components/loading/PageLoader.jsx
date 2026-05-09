const skeletonItems = Array.from({ length: 6 }, (_, index) => index);

const PageLoader = ({ title = "Loading content" }) => {
  return (
    <main className="bg-[#f7f9ff] px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl rounded-[28px] bg-white px-5 py-7 shadow-[0_18px_55px_rgba(19,34,86,0.06)] sm:px-6">
        <div className="mb-7 flex items-center justify-between gap-4">
          <div>
            <div className="h-3 w-28 animate-pulse rounded-full bg-[#dfe6ff]" />
            <div className="mt-4 h-8 w-72 max-w-full animate-pulse rounded-full bg-[#edf1ff]" />
          </div>
          <div className="hidden h-11 w-32 animate-pulse rounded-xl bg-[#edf1ff] sm:block" />
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-label={title}>
          {skeletonItems.map(item => (
            <div key={item} className="rounded-3xl border border-[#e6ebff] bg-white p-4">
              <div className="h-40 animate-pulse rounded-2xl bg-[#edf1ff]" />
              <div className="mt-5 h-5 w-4/5 animate-pulse rounded-full bg-[#e4eaff]" />
              <div className="mt-3 h-4 w-3/5 animate-pulse rounded-full bg-[#edf1ff]" />
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 animate-pulse rounded-full bg-[#e4eaff]" />
                <div className="flex-1">
                  <div className="h-4 w-2/3 animate-pulse rounded-full bg-[#edf1ff]" />
                  <div className="mt-2 h-3 w-1/2 animate-pulse rounded-full bg-[#edf1ff]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PageLoader;
