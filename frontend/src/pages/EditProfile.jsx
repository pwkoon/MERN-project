import { useState, useEffect } from "react";
import Spinner from "../ components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [skill, setSkill] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/profiles/${id}`)
      .then((response) => {
        setName(response.data.name);
        setSkill(response.data.skill);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Check console");
        console.log(error);
      });
  }, []);

  const handleEditProfile = () => {
    const data = {
      title,
      name,
      skill,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/profiles/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/profiles");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Edit Profile</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Name</label>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Skill</label>
          <input
            required
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditProfile}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
