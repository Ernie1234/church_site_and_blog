import BlogHeader from "../components/BlogHeader";
import BlogPosts from "../components/BlogPosts";
import NavBar from "../components/NavBar";

function Blog() {
  return (
    <div className="dark:bg-bgBlack-900">
      <NavBar />
      <BlogHeader />
      <BlogPosts />
    </div>
  );
}

export default Blog;
