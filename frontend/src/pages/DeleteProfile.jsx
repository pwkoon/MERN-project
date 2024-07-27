import { useState, useEffect } from "react";
import BackButton from "../ components/BackButton";
import Spinner from "../ components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import ProfileCard from "../ components/ProfileCard";

const DeleteProfile = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [skill, setSkill] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://mern-project-api-green.vercel.app/profiles/${id}`)
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

  const handleDeleteProfile = () => {
    setLoading(true);
    axios
      .delete(`https://mern-project-api-green.vercel.app/profiles/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Profile Deleted successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="bg-rose-900 p-4 h-auto lg:h-screenflex justify-center">
      <div className="bg-neutral-400 lg:w-11/12">
        <BackButton />
        <h1 className="text-3xl text-white font-header p-10 text-center">
          Delete Profile
        </h1>
        <div className="flex justify-center m-10">
          <ProfileCard name={name} title={title} skill={skill} />
        </div>
        {loading ? <Spinner /> : ""}
        <div className="wrapper-form flex flex-col items-center rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl text-white font-header">
            Are You Sure You want to delete this profile?
          </h3>

          <button
            className="p-4 bg-red-600 text-white m-8 w-full"
            onClick={handleDeleteProfile}
          >
            Yes, Delete it
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProfile;
