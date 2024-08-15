import { useEffect, useReducer } from "react";
import Spinner from "../ components/Spinner";
import ProfileCard from "../ components/ProfileCard";
import axios from "axios";
import BackButton from "../ components/BackButton";
import { useTheme } from "../ThemeContext";

const ACTIONS = {
  CALL_API: "call-api",
  SUCCESS: "success",
  ERROR: "error",
};

const profileReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CALL_API: {
      return {
        ...state,
        loading: true,
      };
    }
    case ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        profiles: action.data,
      };
    }
    case ACTIONS.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
  }
};

const initialState = {
  profiles: [],
  loading: false,
  error: null,
};

const ShowProfile = () => {
  const darkTheme = useTheme();
  // const [profiles, setProfiles] = useState([]);
  // const [loading, setLoading] = useState(false);

  //using useReducer to control complex state
  const [state, dispatch] = useReducer(profileReducer, initialState);
  const { profiles, loading } = state;

  useEffect(() => {
    dispatch({ type: ACTIONS.CALL_API });
    axios
      .get("https://mern-project-api-green.vercel.app/profiles")
      .then((response) => {
        dispatch({ type: ACTIONS.SUCCESS, data: response.data });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.ERROR, error: error });
      });
  }, []);

  return (
    <>
      <BackButton />
      <div
        className={`${
          darkTheme ? "bg-emerald-300" : "bg-emerald-600"
        } flex-row lg:flex justify-center items-center`}
      >
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
