import { AiFillYoutube } from "react-icons/ai";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { data } from "../configs/data";
function HorizontalScroll() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div
      className="pt-8 flex
     flex-col w-[95%] m-auto"
    >
      <Link
        to="https://www.youtube.com/@GideonOdomaOfficial"
        target="_blank"
        className="flex gap-5 items-center justify-center lg:justify-normal lg:ml-28"
      >
        <h3 className="text-black dark:text-white text-lg font-bold uppercase hover:cursor-pointer">
          gideon odoma official
        </h3>
        <AiFillYoutube size={45} color="#FF0000" />
      </Link>
      <div className="relative flex items-center ">
        <MdChevronLeft
          className="opacity-50 dark:text-white cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide no-scrollbar"
        >
          {data.map((item) => (
            <Link key={item.id} to={item?.link} target="_blank">
              <img
                className="w-[250px] h-[250px] md:w-[320px] md:h-[320px] object-cover inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                src={item.img}
                alt="img"
              />
            </Link>
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 dark:text-white cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </div>
  );
}

export default HorizontalScroll;
