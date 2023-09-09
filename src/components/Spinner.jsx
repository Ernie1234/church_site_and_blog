import { Oval } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Oval
        height={80}
        width={80}
        color="#BA765F"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="##BA765F"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

export default Spinner;
