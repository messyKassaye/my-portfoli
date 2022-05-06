import Image from "next/image";
import Link from "next/link";
const ExperienceCard = ({ experience }) => {
  return (
    <div className="flex flex-col block p-6 max-w-sm  border border-gray-200 hover:border-[#FF9001] cursor-pointer">
      <Link href={experience.link}>
        <a target="_blank" rel="noopener">
          <div
            style={{ position: "relative", width: "300px", height: "100px" }}
          >
            <Image
              alt={experience.name}
              src={experience.logo}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="mt-10" />
          <span className="text-white text-2xl font-bold">
            {experience.name}
          </span>
          <div className="flex justify-center items-center">
            <span>{experience.position}</span>
            <span className="text-[#FF9001] font-bold p-2">-</span>
            <span>{experience.year}</span>
          </div>
        </a>
      </Link>
    </div>
  );
};
export default ExperienceCard;
