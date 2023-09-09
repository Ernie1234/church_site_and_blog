import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Button2 from "./Button2";

function Card({ stories }) {
  return (
    <>
      {stories?.map((story) => (
        <Link to={`/blog/${story.slug.current}`} key={story.slug.current}>
          <div className="max-w-sm bg-white border rounded-lg shadow border-slate-200 hover:bg-slate-50 dark:hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-800">
            <img
              className="object-cover w-full rounded-t-lg h-72"
              src={story.mainImage.asset.url}
              alt={story.slug.current}
              loading="lazy"
            />

            <div className="p-5">
              <p className="text-sm text-gray-300">{story.name} &middot; </p>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {story.title}
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {`${story.body[0].children[0].text.substring(0, 100)}...`}
              </p>
              <Button2 text="Read More" />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

Card.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // Specify the type and validation rules for 'name'
      title: PropTypes.string,
    })
  ).isRequired,
};

export default Card;
