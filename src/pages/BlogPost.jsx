import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";

import { client } from "../configs/client";
import { postQuery } from "../configs/data";
import Spinner from "../components/Spinner";
import BreadCrumbNav from "../components/BreadCrumbNav";
import Avatar from "../components/Avatar";
import Socials from "../components/Socials";
import HomeBlogSection from "../components/HomeBlogSection";

function BlogPost() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);
    const query = postQuery(slug);
    client
      .fetch(query)
      .then((data) => {
        setPost(data[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  useEffect(() => {
    document.title = `Reading | ${post.title}`;
  }, [post.title]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <section className="bg-gray-200 pt-10 dark:bg-gray-900">
      <div className="w-5/6 md:w-4/6 mx-auto">
        <div className="w-full mx-auto ">
          <BreadCrumbNav slug={slug} />
          <h2 className="my-5 text-black dark:text-gray-200 text-6xl">
            {post.title}
          </h2>
          <div className="flex flex-col md:flex-row justify-between mr-8 gap-8 md:gap-0">
            {post.publishedAt && (
              <Avatar
                arthur={post.authorName}
                moment={post.publishedAt}
                image={post.authorImage.asset._ref}
              />
            )}
            <Socials />
          </div>
        </div>
        <section className="pt-16">
          {post.mainImage && (
            <img
              src={post.mainImage.asset.url}
              alt={post.mainImage.asset.url}
              loading="lazy"
              className="object-cover w-full rounded-lg h-[20]"
            />
          )}
          <div className="w-5/6 mx-auto">
            <div className="py-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}
              </h5>
              <article className="mb-3 font-normal text-black dark:text-gray-200">
                <PortableText value={post.body} />
              </article>

              {/* author card details */}
              {/* NOTE NOTE NOTE */}
              {/* <AuthorCard /> */}
              {/* Could not resolve the issue here: left till further knowledge to resolve it */}
            </div>
          </div>
          <HomeBlogSection header="More Posts" />
        </section>
      </div>
    </section>
  );
}

export default BlogPost;
