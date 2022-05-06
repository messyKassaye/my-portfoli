import photo from "../../public/photo1.png";
import Image from "next/image";
const Picture = () => {
  return (
    <div>
      <Image height={480} width={480} src={photo} className="rounded-3xl" />
    </div>
  );
};

export default Picture;
