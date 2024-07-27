import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const ProfileCard = ({ name, title, skill, _id }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-700 border-solid border-2 border-indigo-60 text-white wrapper-card relative">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-base">{title}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-fit">
          #{skill}
        </span>
      </div>
      <div className="absolute flex gap-2 bottom-3 right-3">
        <Link to={`/profiles/edit/${_id}`}>
          <FaEdit className="text-xl" />
        </Link>
        <Link to={`/profiles/delete/${_id}`}>
          <RiDeleteBin5Line className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};

export default ProfileCard;
