import Button from "./Button";

function Newletter() {
  return (
    <form className="flex flex-col items-start md:items-end gap-2 ">
      <h4 className="uppercase text-sm font-semibold">
        Subscribe for our newsletter
      </h4>
      <input
        type="text"
        className="max-w-7xl md:w-[25vw] bg-transparent border-2 h-10 border-black dark:border-white"
      />
      <Button text="Submit" />
    </form>
  );
}

export default Newletter;
