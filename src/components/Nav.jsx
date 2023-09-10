import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Nav() {
  const active = "text-white font-bold text-md";
  const notActive =
    "transition-all text-white font-light text-sm upppercase hover:text-slate-300";

  return (
    <ul className="w-5/6 m-auto py-5 font-Montserrat uppercase hidden md:flex md:flex-row  md:items-center gap-8">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? active : notActive)}
      >
        Home
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) => (isActive ? active : notActive)}
      >
        blog
      </NavLink>

      <Link
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="about"
        className={`transition-all text-white font-light text-sm upppercase hover:text-slate-300 cursor-pointer`}
      >
        About
      </Link>
      <Link
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="program"
        className={`transition-all text-white font-light text-sm upppercase hover:text-slate-300 cursor-pointer`}
      >
        Program
      </Link>
      <Link
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="contact"
        className={`transition-all text-white font-light text-sm upppercase hover:text-slate-300 cursor-pointer`}
      >
        contact
      </Link>
    </ul>
  );
}

export default Nav;
