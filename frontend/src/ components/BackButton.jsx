import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex z-50 fixed m-4">
      <Link
        to={destination}
        className="bg-gray-700 text-white px-4 py-4 rounded-lg w-fit"
      >
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  );
};

export default BackButton;
