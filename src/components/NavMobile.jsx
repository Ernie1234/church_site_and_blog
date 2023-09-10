import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

function NavMobile({ setIsMenuOpen }) {
  const active = "text-stone-300 font-semibold text-xl";
  const notActive =
    " text-white transition-all font-semibold text-xl hover:text-greengray-900";

  return (
    <>
      <ul className={`flex justify-center items-center flex-col gap-8`}>
        <div className="pr-4 pt-4 absolute top-0 right-0 text-white">
          <IoClose
            size={35}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          />
        </div>
        <li>
          <NavLink
            to="/"
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            Blog
          </NavLink>
        </li>

        <li>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
            }}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="about"
            className="text-white transition-all font-semibold text-xl hover:text-greengray-900 cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
            }}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="programs"
            className="text-white transition-all font-semibold text-xl hover:text-greengray-900 cursor-pointer"
          >
            Programs
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              setIsMenuOpen(false);
            }}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="contact"
            className="text-white transition-all font-semibold text-xl hover:text-greengray-900 cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}

NavMobile.propTypes = {
  setIsMenuOpen: PropTypes.bool,
};
export default NavMobile;
