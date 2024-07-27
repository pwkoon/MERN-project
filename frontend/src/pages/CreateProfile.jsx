import { useState } from "react";
import axios from "axios";
import Spinner from "../ components/Spinner";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateProfile = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [skill, setSkill] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveProfile = () => {
    if (!name || !title || !skill) {
      setError("All fields are necessary!");
      return;
    }
    const data = {
      name,
      title,
      skill,
    };
    // setLoading(true);
    axios
      .post("https://mern-project-api-green.vercel.app/profiles", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created successfully", { variant: "success" });
        navigate("/profiles");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4 bg-black">
      <h1 className="text-3xl font-header text-white text-center my-4">
        3 key details to craft your profile
      </h1>
      {loading ? <Spinner /> : ""}
      <div className="wrapper-form flex flex-col border-2 border-yellow-400 rounded-xl w-[600px] p-4 mx-auto animate-wiggle">
        <div className="my-4">
          <label className="text-xl mr-4 text-white">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-white">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-white">Skill</label>
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        {error && (
          <div className="mx-auto bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
            {error}
          </div>
        )}
        <button className="p-2 bg-yellow-400 m-8" onClick={handleSaveProfile}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateProfile;
