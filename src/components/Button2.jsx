import PropTypes from "prop-types";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";

function Button2({ text, downArrow }) {
  return (
    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none  dark:bg-csBrown-100 dark:hover:bg-csBrown-200 dark:focus:bg-csBrown-200 gap-3">
      {text}
      {downArrow ? <AiOutlineDown /> : <AiOutlineRight />}
    </button>
  );
}

Button2.propTypes = {
  text: PropTypes.string,
  downArrow: PropTypes.bool,
};

export default Button2;
