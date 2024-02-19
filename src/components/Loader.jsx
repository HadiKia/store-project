import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className="col-span-2 lg:col-span-3 grid place-items-center h-96 border-y border-r rounded">
      <RotatingLines
        height="50"
        width="50"
        strokeColor="#69717d"
        strokeWidth="2"
        animationDuration="2"
      />
    </div>
  );
}

export default Loader;
