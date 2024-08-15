import { useRef, useState } from "react";
import LevelSkill from "./LevelSkill";

function Skill() {
  const [skillList, setSkillList] = useState([
    "React",
    "Docker",
    "Next JS",
    "Ruby on Rails",
    "Python",
    "MERN",
    "Deployment",
    "CI/CD",
    "AWS",
    "Git",
    "Flutter",
    "UI/UX",
    "C++",
    "Java",
    "Figma",
    "Cloud",
    "Database",
    "SQL",
    "Agile",
    "MVC/ ORM",
  ]);
  const childRef = useRef();

  const handleClick = (skill) => {
    childRef.current.appendSkill(skill);
    setSkillList(skillList.filter((item) => item !== skill));
  };

  const addSkillBack = (removedSkill) => {
    setSkillList([...skillList, removedSkill]);
  };

  return (
    <>
      <div className="flex-row p-10 lg:grid lg:grid-cols-2 gap-10 bg-black items-center">
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-5 mx-auto">
          {skillList.map((skill, index) => (
            <button
              key={index}
              onClick={() => handleClick(skill)}
              className="text-white border-2 border-yellow-400 rounded-xl p-2 text-wrap sm:text-nowrap sm:w-[120px]"
            >
              {skill}
            </button>
          ))}
        </div>
        <LevelSkill ref={childRef} addSkillBack={addSkillBack} />
      </div>
    </>
  );
}

export default Skill;
