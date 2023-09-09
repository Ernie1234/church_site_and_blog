import PropTypes from "prop-types";

function Avatar({ arthur, date }) {
  return (
    <>
      <div className="flex items-center space-x-4">
        <img
          className="w-10 h-10 rounded-full"
          src="/docs/images/people/profile-picture-5.jpg"
          alt=""
        />
        <div className="font-medium dark:text-white">
          <div>{arthur}</div>
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {date} &middot; Joined in August 2014
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

Avatar.propTypes = {
  arthur: PropTypes.string,
  date: PropTypes.string,
};

export default Avatar;
