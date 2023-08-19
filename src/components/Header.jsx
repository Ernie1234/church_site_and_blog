import vid from "../assets/share.mp4";
import Hero from "../assets/apostle1.png";
import Newletter from "./Newletter";

import { Cursor, useTypewriter } from "react-simple-typewriter";

function Header() {
  const [text] = useTypewriter({
    words: ["Gideon Odoma"],
    loop: false,
    delaySpeed: 5000,
    typeSpeed: 100,
  });
  return (
    <header className="relative h-[100vh] w-full scroll-smooth bg-slate-900 mb-10">
      <div className="absolute z-0">
        <video
          src={vid}
          type="video/mp4"
          controls={false}
          muted
          autoPlay
          loop
          className="w-full h-full object-cover"
        />
        <div
          className="absolute flex
         top-0 left-0 right-0 bottom-0 bg-blackOverlay"
        >
          <div className="w-2/5 flex flex-col self-end">
            <img src={Hero} alt="Hero" />
          </div>
          <div className="w-3/5 flex flex-col justify-center text-white items-end pr-40">
            <div className="uppercase flex items-end flex-col font-[Inter]">
              <h3 className="text-md ">Hello! My name </h3>

              <h1 className="text-4xl lg:text-5xl font-semibold">
                <span>{text}</span>
                <Cursor cursorColor="#f7ab0a" />
              </h1>
            </div>
            <p className="text-sm text-justify font-[Inter] py-8">
              {`"`}Welcome to my Corner – a place of inspiration, guidance, and
              spiritual growth. We invite you to embark on a transformative
              journey with Pastor Apostle Gideon Odoma, a devoted shepherd with
              a heart dedicated to spreading the light of faith and love.
              Through profound sermons, thought-provoking reflections, and
              compassionate teachings, bringing age-old wisdom into the
              contemporary world, offering solace to the weary and hope to the
              seeking. Join us as we explore the depths of spirituality, foster
              a sense of community, and find meaning in the embrace of divine
              grace. Whether you{`'`}re a lifelong believer or just beginning to
              explore your spiritual path, this is a space where all are
              welcome.
            </p>
            <Newletter />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
