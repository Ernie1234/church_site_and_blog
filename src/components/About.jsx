import { BsFillPersonLinesFill } from "react-icons/bs";
import AboutCarousel from "./AboutCarousel";

function About() {
  return (
    <>
      <AboutCarousel />
      <div className="md:max-w-7xl mx-auto px-6 md:px-12 dark:text-white">
        <div className="flex gap-5 items-center text-black dark:text-white mb-2 md:mb-4">
          <h2 className="text-black dark:text-white text-lg font-bold uppercase">
            Personal Detail
          </h2>
          <BsFillPersonLinesFill size={35} color="#2563eb" />
        </div>
        <p className=" mb-6">
          Gideon Odoma is an itinerant preacher, a Christian apologist, and a
          writer/blogger. An astute communicator, he also is a strategy
          consultant. After his first degree, he received training in theology
          and Christian apologetics from Oxford University and The Oxford Centre
          for Christian Apologetics (OCCA) respectively.
        </p>
        <p>
          He is passionate about engaging young people and opinion leaders with
          the claims of the Christian faith, and helping Christians grow into
          mature, competent, representatives of Christ, whatever their placement
          or vocation in life. He is the President of Fortress Ministry. Gideon
          is married to Hassana, a Barrister by training. They live with their
          three children, in Jos, Nigeria.
        </p>
      </div>
    </>
  );
}

export default About;
