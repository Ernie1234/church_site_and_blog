import { AiFillInstagram, AiFillMail, AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="flex justify-center gap-5 py-5 w-full bottom-0 bg-black text-white mt-10 mb-0">
      <Link to="https://www.youtube.com/@GideonOdomaOfficial">
        <AiFillYoutube size={30} />
      </Link>

      <Link to="https://www.instagram.com/gideonodoma/">
        <AiFillInstagram size={30} />
      </Link>

      <Link to="https://www.instagram.com/fortressministry/">
        <AiFillMail size={30} />
      </Link>
    </footer>
  );
}

export default Footer;
