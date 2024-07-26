import Spinner from "../ components/Spinner";
import ProfileCard from "../ components/ProfileCard";
import { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "../ components/BackButton";

const ShowProfile = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/profiles")
      .then((response) => {
        setProfiles(response.data);
        console.log(profiles);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <BackButton />
      <div className="bg-emerald-600 flex-row lg:flex justify-center items-center ">
        {profiles.length > 0 ? (
          <div className="p-10 flex justify-center items-center">
            <img src="/subhead-logo.png" width={450} alt="sub-header logo" />
          </div>
        ) : (
          ""
        )}
        {loading ? (
          <Spinner />
        ) : profiles.length > 0 ? (
          <div className="bg-neutral-600 h-auto">
            <div className="h-100 flex justify-center">
              <div className="grid grid-cols-1 p-10 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {profiles.map((profile, index) => (
                  <ProfileCard
                    key={index}
                    _id={profile._id}
                    name={profile.name}
                    title={profile.title}
                    skill={profile.skill}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>No profiles found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowProfile;
