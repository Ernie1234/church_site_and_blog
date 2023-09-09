import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

function Socials() {
  return (
    <div className="text-slate-800 dark:text-white flex gap-3">
      <Link
        to="https://web.facebook.com/gideonsfort"
        className="hover:text-slate-800 dark:hover:text-slate-200"
      >
        <BsFacebook size={35} />
      </Link>
      <Link
        to="https://www.instagram.com/gideonodoma/"
        className="hover:text-slate-800 dark:hover:text-slate-200"
      >
        <AiFillInstagram size={35} />
      </Link>
      <Link
        to="https://www.youtube.com/channel/UCXEbqxO7HZ-6o_3WN7YKJrg"
        className="hover:text-slate-800 dark:hover:text-slate-200"
      >
        <BsYoutube size={35} />
      </Link>
    </div>
  );
}

export default Socials;
