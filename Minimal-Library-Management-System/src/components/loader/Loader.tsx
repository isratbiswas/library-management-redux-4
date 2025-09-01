import { CircleLoader } from "react-spinners";
const Loader = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-16 text-lime-500">
        <CircleLoader color="#3b82f6" />
      </div>
    </>
  );
};

export default Loader;