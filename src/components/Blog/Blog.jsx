import React from "react";
import { useLoaderData } from "react-router";

const Blog = () => {
  const blogs = useLoaderData();
  return (
    <div className="text-black">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="card bg-white w-[90%] mx-auto shadow-sm my-5"
        >
          <div className="card-body">
            <div className="md:flex grid gap-2 justify-between items-center">
              <h2 className="card-title text-2xl">{blog.title}</h2>
              <div className="badge badge-soft badge-info bg-blue-300 border-0 text-blue-500 font-semibold">
                {blog.category}
              </div>
            </div>
            <p className="text-lg text-slate-500">{blog.content}</p>
            <div className="border-b-2 border-slate-300 my-2 border-dotted"></div>
            <div className="md:flex grid gap-2 justify-between items-center">
              <div className="font-semibold text-slate-400">
                <p>Author: {blog.author}</p>
                <p>Date: {blog.date}</p>
              </div>
              <div>
                <button className="md:text-lg text-sm font-bold cursor-pointer text-blue-500">{`Read More >>`}</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
