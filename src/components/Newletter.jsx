import Button from "./Button";

function Newletter() {
  return (
    <form className="flex flex-col items-end gap-2">
      <h4 className="uppercase text-sm font-semibold">
        Subscribe for our newsletter
      </h4>
      <input type="text" className="w-[25vw] bg-transparent border-2 h-10" />
      {/* <div className="w-min"> */}
      <Button text="Submit" />
      {/* </div> */}
    </form>
  );
}

export default Newletter;
