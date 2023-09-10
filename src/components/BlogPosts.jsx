import BlogCard from "./BlogCard";
import HorizontalCard from "./HorizontalCard";

function BlogPosts() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:max-w-7xl mx-auto gap-12 mt-16 mb-8 bg-slate-300 dark:bg-transparent">
        <aside className="max-w-7xl mx-auto px-3 lg:px-0">
          <BlogCard />
        </aside>

        <aside className="max-w-7xl mx-auto px-3 md:px-0">
          <article>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-slate-600  md:text-4xl dark:text-white">
              Programs
            </h2>
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
          </article>
          <article>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-slate-600 mt-12 md:text-4xl dark:text-white">
              News
            </h2>
            <HorizontalCard />
          </article>
        </aside>
      </div>
    </>
  );
}

export default BlogPosts;
