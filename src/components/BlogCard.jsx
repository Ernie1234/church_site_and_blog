import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BlogCard({ stories }) {
  //   console.log(stories);
  return (
    <>
      {!stories ? (
        <h2>loading</h2>
      ) : (
        <>
          {stories?.map((story) => (
            <Link to={`/blog/${story.slug.current}`} key={story.slug.current}>
              <article className="border border-slate-200 rounded-lg overflow-hidden hover:bg-slate-50 transition-all duration-150">
                {story.mainImage && (
                  <img
                    src={story.mainImage.asset.url}
                    alt={story.slug.current}
                    loading="lazy"
                  />
                )}
                <div className="p-4">
                  <p className="text-sm">{story.name} &middot; </p>
                  <h2 className="text-xl mb-2">{story.title}</h2>
                  <p className="text-sm leading-relaxed">
                    {`${story.body[0].children[0].text.substring(0, 150)}...`}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </>
      )}
    </>
  );
}

BlogCard.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // Specify the type and validation rules for 'name'
      title: PropTypes.string,
    })
  ).isRequired,
};

export default BlogCard;
