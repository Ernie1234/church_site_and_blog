import { AiOutlineRight, AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function BreadCrumbNav({ slug }) {
  return (
    <>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 text-lg">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-base md:text-xl font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white gap-3"
            >
              <AiFillHome className=" text-gray-700 dark:text-gray-400" />
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <AiOutlineRight className=" text-gray-700 dark:text-gray-400" />
              <Link
                to="/blog/"
                className="ml-1 text-base md:text-xl capitalize font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >
                Blog post
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <AiOutlineRight className=" text-gray-700 dark:text-gray-400" />
              <h5 className="ml-1 text-base md:text-xl capitalize font-medium text-gray-700 md:ml-2 dark:text-gray-400 ">
                {slug}
              </h5>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
}

BreadCrumbNav.propTypes = {
  slug: PropTypes.string,
};

export default BreadCrumbNav;
