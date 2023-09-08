import PropTypes from "prop-types";

function Button({ text }) {
  return (
    <button className="px-6 py-2 bg-csBrown-100 text-black uppercase font-bold hover:bg-csBrown-200">
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
