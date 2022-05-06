import Picture from "./shared/picture";
const Profile = () => {
  return (
    <div className="flex justify-around items-center h-screen p-10">
      <div className="flex flex-col items-start">
        <span className="text-white font-bold text-3xl">{`I'M MESERET KASSAYE`}</span>
        <span className="text-[#FF9001]  text-2xl mt-5">
          FRONT-END DEVELOPER
        </span>
      </div>
      <div>
        <Picture />
      </div>
    </div>
  );
};

export default Profile;
