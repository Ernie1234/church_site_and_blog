import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import SanityBlockContent from "@sanity/block-content-to-react"; //

import { authorQuery } from "../configs/data";
import { client } from "../configs/client";
import Spinner from "./Spinner";

function AuthorCard() {
  const [author, setAuthor] = useState([]);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);
    const query = authorQuery(slug);
    client
      .fetch(query)
      .then((data) => {
        setAuthor(data[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [slug]);
  //todo remove when done
  console.log(author);
  if (loading) {
    console.log(author.author.bio[0].children[0].text);
  }

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 overflow-hidden mt-8">
        {/* <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover"
          src={urlFor(author.author.image).quality(100).url()}
          alt={author.author.image}
          width="384"
          loading='lazy'
          height="512"
        /> */}

        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          {/* <blockquote>{console.log(author.author)}</blockquote> */}
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {/* {author.author.name} */}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Founding Pastor &middot; Fortress Ministry
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}

export default AuthorCard;
