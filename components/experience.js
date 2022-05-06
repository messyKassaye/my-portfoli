import { myExperience } from "./data/experience-data";
import ExperienceCard from "./cards/experience-card";

const Experience = () => {
  return (
    <div className="flex flex-col justify-start items-start h-screen ml-52 mt-16 p-10">
      <span className="text-[#FF9001] font-bold text-2xl">My experiences</span>
      <div className="flex gap-10 mt-10">
        {myExperience.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
