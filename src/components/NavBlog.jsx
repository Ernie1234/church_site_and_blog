import Headroom from "react-headroom";
import { NavLink } from "react-router-dom";

function NavBar() {
  const active = "text-white  font-bold text-md";
  const notActive =
    "transition-all text-white font-light text-sm upppercase hover:text-slate-300";

  return (
    <Headroom style={{ zIndex: 100 }}>
      <nav className="w-full bg-bgBlack-900 text-white shadow-md ">
        <ul className="flex gap-8 w-5/6 m-auto py-5 font-Montserrat uppercase">
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
        </ul>
      </nav>
    </Headroom>
  );
}

export default NavBar;
