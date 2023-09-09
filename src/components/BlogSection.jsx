import { useState, useEffect } from "react";

import { blogQuery } from "../configs/data";
import { client } from "../configs/client";
import Button from "./Button";
import Spinner from "./Spinner";
import Card from "./Card";

function BlogSection() {
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
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-5 mt-16 mb-8">
        <Card stories={stories} />
      </section>
      <div className="flex justify-end max-w-7xl mx-auto">
        <Button text="Read all blog posts" />
      </div>
    </>
  );
}

export default BlogSection;
