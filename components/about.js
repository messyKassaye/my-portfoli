import { emojis } from "./data/about-data";
import Picture from "./shared/picture";

const About = () => {
  const abouts = emojis;
  return (
    <div className="flex justify-start items-start h-screen  p-10">
      <div className="flex flex-col items-start ml-60">
        <Picture />
      </div>
      <div className="flex flex-col justify-start ml-10">
        <span className="text-[#FF9001] text-2xl underline mb-5">About me</span>
        <div className="flex flex-col">
          {abouts.map((about) => (
            <div key={about.id} className="flex items-center mb-5">
              <span className="mr-3">{about.emoji}</span>
              <span>{about.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
