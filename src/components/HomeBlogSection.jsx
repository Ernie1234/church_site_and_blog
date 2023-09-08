import { useState, useEffect } from "react";
import { ImBlog } from "react-icons/im";

import { client } from "../configs/client";
import { blogQuery } from "../configs/data";
import Spinner from "./Spinner";
import Card from "./Card";

function HomeBlogSection() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(blogQuery)
      .then((data) => {
        setStories(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const trimmedArr = stories.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-5 my-12">
      <div className="flex gap-5 items-center ml-28">
        <h2 className="text-black text-lg font-bold uppercase">Our blog</h2>
        <ImBlog size={35} color="#FF0000" />
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4 ">
            <Card stories={trimmedArr} />
          </div>
        </>
      )}
    </section>
  );
}

export default HomeBlogSection;
