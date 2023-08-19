import { MdChevronLeft, MdChevronRight } from "react-icons/md";
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
    <div>
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide no-scrollbar"
        >
          {data.map((item) => (
            <img
              key={item.id}
              className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={item.img}
              alt="img"
            />
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </div>
  );
}

export default HorizontalScroll;