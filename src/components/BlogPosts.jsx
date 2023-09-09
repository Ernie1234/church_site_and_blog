import BlogCard from "./BlogCard";
import HorizontalCard from "./HorizontalCard";

function BlogPosts() {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:max-w-7xl mx-auto gap-12 mt-16 mb-8">
        <BlogCard />

        <aside>
          <article>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
              Programs
            </h2>
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
          </article>
          <article>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
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
