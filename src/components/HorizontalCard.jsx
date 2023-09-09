import { Link } from "react-router-dom";
import Button2 from "./Button2";

function HorizontalCard() {
  return (
    <>
      <Link
        to="/"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:mb-2"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://naijasermons.com.ng/wp-content/uploads/2021/11/Apostle-Gideon-Odoma-1.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <div className="mt-2">
            <Button2 text="Read More" />
          </div>
        </div>
      </Link>
    </>
  );
}

export default HorizontalCard;
