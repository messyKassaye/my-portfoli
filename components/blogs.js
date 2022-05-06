import BlogsCard from "./cards/blogs-card";
import { blogsData } from "./data/blogs-data";

const Blogs = () => {
  return (
    <div className="flex flex-col justify-start items-start h-screen ml-52 mt-16 p-10">
      <span className="text-black font-bold text-2xl">My blogs</span>
      <div className="flex gap-10 mt-10">
        {blogsData.map((blog) => (
          <BlogsCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
