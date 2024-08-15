import { useState, useRef, useImperativeHandle, forwardRef } from "react";
import PropTypes from "prop-types";

const LevelSkill = forwardRef((props, ref) => {
  const inputRef = useRef();

  const [skills, setSkills] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleClearClick = () => {
    setVisible(false);
    setSkills([]);
  };

  useImperativeHandle(ref, () => ({
    appendSkill: (skill) => {
      setSkills([...skills, skill]);
    },
  }));

  return (
    <>
      <div className="text-center pt-5">
        <h1 className="text-yellow-400 text-2xl font-header text-pretty">
          Simple click and check test to find out your programming level.
        </h1>
        <br />
        {visible ? (
          <>
            <h1 className="text-white">Your Results:</h1>
            {skills && skills.length < 12 ? (
              <p className="text-white">You are still at the beginner level</p>
            ) : null}
            {skills && skills.length >= 12 && skills.length < 18 ? (
              <p className="text-white">
                You are on the right track to becoming an experienced programmer
              </p>
            ) : null}
            {skills && skills.length > 18 ? (
              <p className="text-white">You are a professional coder!</p>
            ) : null}
          </>
        ) : null}
        <div>
          <div
            ref={inputRef}
            className="text-white grid grid-cols-2 sm:grid-cols-3 gap-4 justify-around mx-auto p-15 bg-red-900 w-[250px] md:min-w-[500px] min-h-[300px]"
          >
            {skills.length > 0
              ? skills.map((skill, index) => (
                  <div className="flex gap-1 p-10" key={index}>
                    <p
                      className="text-xl font-header cursor-pointer"
                      onClick={() => {
                        setSkills(skills.filter((item) => item !== skill));
                        props.addSkillBack(skill);
                      }}
                    >
                      {skill}
                    </p>
                  </div>
                ))
              : null}
          </div>
          <br />
          <button
            className="bg-yellow-400 text-black font-bold p-1 font-header mx-3"
            onClick={() => {
              setVisible(true);
            }}
          >
            Confirm
          </button>
          <button
            className="bg-gray-400 text-black p-1 font-bold font-header"
            onClick={handleClearClick}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
});

LevelSkill.propTypes = {
  addSkillBack: PropTypes.func.isRequired,
};

LevelSkill.displayName = "LevelSkill";

export default LevelSkill;
