import { Link } from "react-router-dom";

export default function FavouriteList({ blogs }) {
  return blogs.map((blog) => (
    <li key={blog.id}>
      <Link to={`/single-blog/${blog.id}`}>
        <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
          {blog.title}
        </h3>
      </Link>
      <p className="text-slate-600 text-sm">{blog.tags}</p>
    </li>
  ));
}