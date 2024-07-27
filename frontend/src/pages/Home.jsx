import { Link } from "react-router-dom";
import CreateProfile from "./CreateProfile";

const Home = () => {
  return (
    <>
      <div className="bg-banner bg-center bg-cover h-screen flex justify-center items-center">
        <div className="wrapper-header">
          <p className="text-8xl text-white font-bold font-header">Code Cave</p>
          <hr />
          <p className="float-center p-2 text-yellow-400 text-2xl text-white font-header text-center">
            Where Logic Meets Imagination
          </p>
          <div className="flex gap-2 justify-center">
            <Link
              className="bg-black p-2 font-bold text-white"
              href="/profiles"
            >
              Show All
            </Link>
            <a className="bg-black p-2 font-bold text-white" href="#form">
              Create One
            </a>
          </div>
        </div>
      </div>
      <div id="form">
        <CreateProfile />
      </div>
    </>
  );
};

export default Home;
