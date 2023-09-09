import { Cursor, useTypewriter } from "react-simple-typewriter";

import Hero from "../assets/apostle1.png";
import Newletter from "./Newletter";

function Header() {
  const [text] = useTypewriter({
    words: ["Gideon Odoma"],
    loop: false,
    delaySpeed: 5000,
    typeSpeed: 100,
  });
  return (
    <header className="relative h-full lg:h-[100vh] w-full scroll-smooth text-black dark:text-white bg-gray-300 dark:bg-bgBlack-900 mb-10 flex flex-col md:flex-row">
      <img
        src="https://yt3.googleusercontent.com/bMe2T84dWWCEH-10JP4ZM4rAihyDxkPk3OPrfSeuw7awb4ab5u11yifxt1LMO-_gMR-4QysBMg=s900-c-k-c0x00ffffff-no-rj"
        alt="hero"
        className="block md:hidden self-center w-40 h-40 p-1 rounded-full ring-2 ring-gray-400 dark:ring-gray-500 mt-6"
      />
      <div className="hidden md:w-2/5 md:flex flex-col md:self-end ">
        <img src={Hero} alt="Hero" />
      </div>
      <div className="w-full p-6 md:w-3/5 flex flex-col justify-center text-black dark:text-white items-end md:pr-12 lg:pr-20">
        <div className="uppercase flex items-end flex-col font-[Inter]">
          <h3 className="text-md ">Hello! My name </h3>

          <h1 className="text-4xl lg:text-5xl font-semibold">
            <span>{text}</span>
            <Cursor cursorColor="#BA765F" />
          </h1>
        </div>
        <p className="text-sm text-justify font-[Inter] py-8">
          {`"`}Welcome to my Corner – a place of inspiration, guidance, and
          spiritual growth. We invite you to embark on a transformative journey
          with Pastor Apostle Gideon Odoma, a devoted shepherd with a heart
          dedicated to spreading the light of faith and love. Through profound
          sermons, thought-provoking reflections, and compassionate teachings,
          bringing age-old wisdom into the contemporary world, offering solace
          to the weary and hope to the seeking. Join us as we explore the depths
          of spirituality, foster a sense of community, and find meaning in the
          embrace of divine grace. Whether you{`'`}re a lifelong believer or
          just beginning to explore your spiritual path, this is a space where
          all are welcome.
        </p>
        <div className="w-full mx-auto">
          <Newletter />
        </div>
      </div>
    </header>
  );
}

export default Header;
