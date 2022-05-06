import Image from "next/image";
import Link from "next/link";
const BlogsCard = ({ blog }) => {
  return (
    <div className="flex flex-col block p-6 max-w-sm w-80 bg-black  border border-black hover:border-[#FF9001] cursor-pointer">
      <Link href={blog.link}>
        <a
          target="_blank"
          rel="noopener"
          className="flex flex-col items-center justify-center"
        >
          <div className="relative w-24 h-24 mb-10">
            <Image
              className="rounded-full border border-gray-100 shadow-sm"
              src={blog.logo}
            />
          </div>
          <span className="text-white text-2xl font-bold">{blog.name}</span>
        </a>
      </Link>
    </div>
  );
};

export default BlogsCard;
