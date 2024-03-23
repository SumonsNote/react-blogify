import { formatCreatedAt } from "../../utils/getDate";

export default function SingleBlogInfo({ blog }) {
  return (
    <section>
      <div className="container text-center py-8">
        <h1 className="font-bold text-3xl md:text-5xl">{blog.title}</h1>
        <div className="flex justify-center items-center my-4 gap-4">
          <div className="flex items-center capitalize space-x-2">
            <div className="avater-img bg-indigo-600 text-white">
              {/* <span className="">S</span> */}
              <img
                className="rounded-full"
                src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${
                  blog.author.avatar
                }`}
                alt={blog.author.firstName}
              />
            </div>
            <h5 className="text-slate-500 text-sm">
              {blog.author.firstName} {blog.author.lastName}
            </h5>
          </div>
          <span className="text-sm text-slate-700 dot">
            {formatCreatedAt(blog.createdAt)}
          </span>
          <span className="text-sm text-slate-700 dot">
            {blog.likes.length} Likes
          </span>
        </div>
        <img
          className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/blog/${
            blog?.thumbnail
          }`}
          alt=""
        />

        <ul className="tags">
          <li>JavaScript</li>
          <li>Node</li>
          <li>React</li>
          <li>Next</li>
        </ul>

        <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
          {blog.content}
        </div>
      </div>
    </section>
  );
}
