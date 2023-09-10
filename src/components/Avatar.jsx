import { format, formatDistance, subDays } from "date-fns";
import PropTypes from "prop-types";

import { urlFor } from "../configs/client";

function Avatar({ arthur, moment, image }) {
  return (
    <>
      <div className="flex items-center space-x-4">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={urlFor(image).quality(100).url()}
          alt={image}
        />
        <div className="font-medium dark:text-white">
          <div>{arthur}</div>
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {format(new Date(moment), "dd MMMM, yyyy")} &middot;{" "}
              {formatDistance(subDays(new Date(moment), 0), new Date(), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

Avatar.propTypes = {
  arthur: PropTypes.string,
  moment: PropTypes.any,
  image: PropTypes.string,
};

export default Avatar;
