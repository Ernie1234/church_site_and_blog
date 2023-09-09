import { useState, useEffect } from "react";

import { blogQuery } from "../configs/data";
import { client } from "../configs/client";
import Spinner from "./Spinner";
import Card from "./Card";

function BlogCard() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(blogQuery)
      .then((data) => {
        setStories(data);
        setLoading(false);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full">
        <Card stories={stories} />
      </section>
    </>
  );
}

export default BlogCard;
