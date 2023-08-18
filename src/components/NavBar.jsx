import Headroom from "react-headroom";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function NavBar() {
  const active = "text-white  font-bold text-md";
  const notActive =
    "transition-all text-white font-light text-sm upppercase hover:text-slate-300";

  return (
    <Headroom style={{ zIndex: 100 }}>
      <nav className="pt-6 w-full bg-bgBlack-900 text-white shadow-md ">
        <ul className="flex gap-8 w-5/6 m-auto py-5 font-Montserrat uppercase">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? active : notActive)}
          >
            Home
          </NavLink>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="about"
            className={`transition-all text-white font-light text-sm upppercase hover:text-slate-300`}
          >
            blog
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="about"
            className={`transition-all text-white font-light text-sm upppercase hover:text-slate-300`}
          >
            About
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="program"
            className={`transition-all text-white font-light text-sm upppercase hover:text-slate-300`}
          >
            Program
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="contact"
            className={`transition-all text-white font-light text-sm upppercase hover:text-slate-300`}
          >
            contact
          </Link>
        </ul>
      </nav>
    </Headroom>
  );
}

export default NavBar;
