import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </>
  );
}

export default App;
