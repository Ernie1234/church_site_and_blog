import { useLocation } from "react-router-dom";

import BlogHeader from "../components/BlogHeader";
import BlogPosts from "../components/BlogPosts";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NavBlog from "../components/NavBlog";

function Blog() {
  const location = useLocation();
  const currentPath = location.pathname;
  const navFn = () => {
    if (currentPath === "/blog") {
      return <NavBlog />;
    } else if (currentPath === "/blog/") {
      return <NavBlog />;
    } else {
      return <NavBar />;
    }
  };

  return (
    <div className="dark:bg-bgBlack-900">
      {navFn()}
      <BlogHeader />
      <BlogPosts />
      <Footer />
    </div>
  );
}

export default Blog;
