import { useState, useEffect } from "react";
import { ImBlog } from "react-icons/im";
import PropTypes from "prop-types";

import { client } from "../configs/client";
import { blogQuery } from "../configs/data";
import Spinner from "./Spinner";
import Card from "./Card";

function HomeBlogSection({ header }) {
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
      <div className="flex gap-5 items-center ml-28 text-black dark:text-white">
        <h2 className="text-black dark:text-white text-lg font-bold uppercase">
          {header}
        </h2>
        <ImBlog size={35} />
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

HomeBlogSection.propTypes = {
  header: PropTypes.string,
};

export default HomeBlogSection;
