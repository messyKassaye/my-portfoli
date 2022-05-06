import Link from "next/link";
import BlogsCard from "./cards/blogs-card";
import { ContactsData } from "./data/contacts-data";

const Contacts = () => {
  return (
    <div className="flex flex-col justify-start items-start h-screen ml-52 mt-16 p-10">
      <span className="text-[#FF9001] font-bold text-2xl">Contact me</span>
      <div className="flex flex-col items-start justify-center">
        {ContactsData.map((contact) => (
          <Link key={contact.name} href={contact.link}>
            <a target={"_blank"}>
              <div className="flex p-3">
                <span>{`${contact.name} : ${contact.address}`}</span>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
