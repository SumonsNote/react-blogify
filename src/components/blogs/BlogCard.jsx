import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { actions } from "../../actions";
import threeDots from "../../assets/icons/3dots.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { blogReducer, initialState } from "../../reducers/blogReducer";
import { formatCreatedAt } from "../../utils/getDate";

export default function BlogCard({ blog }) {
  const [showAction, setShowAction] = useState(false);
  const { api } = useAxios();
  const { auth } = useAuth();
  const [state, dispatch] = useReducer(blogReducer, initialState);
  const isMe = blog?.author?.id == auth?.user?.id;

  const handleAction = (e) => {
    e.preventDefault();
    // e.stopPropagation();
    setShowAction(!showAction);
  };

  const content = blog.content;
  const reducedContent = content.slice(0, 200);

  const letter = blog.author.firstName;
  const getFirstLetter = letter.slice(0, 1);

  const handleDeleteBlog = async (event) => {
    dispatch({ type: actions.blog.DATA_FETCHING });
    event.preventDefault();

    try {
      const response = await api.delete(
        `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/${blog.id}`
      );

      if (response.status === 200) {
        dispatch({
          type: actions.blog.BLOG_DELETED,
          data: blog.id,
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: actions.blog.DATA_FETCH_ERROR,
        error: response.error,
      });
    }
  };

  return (
    <>
      <Link to={`/single-blog/${blog.id}`}>
        <div className="blog-card">
          <img
            className="blog-thumb"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/blog/${
              blog?.thumbnail
            }`}
            alt=""
          />
          <div className="mt-2 relative">
            <h3 className="text-slate-300 text-xl lg:text-2xl">{blog.title}</h3>
            <p className="mb-6 text-base text-slate-500 mt-1">
              {reducedContent}
            </p>

            <div className="flex justify-between items-center">
              <div className="flex items-center capitalize space-x-2">
                <div className="avater-img bg-indigo-600 text-white">
                  {!blog.author.avatar ? (
                    <span>{getFirstLetter}</span>
                  ) : (
                    <img
                      className="rounded-full"
                      src={`${
                        import.meta.env.VITE_SERVER_BASE_URL
                      }/uploads/avatar/${blog?.author?.avatar}`}
                      alt=""
                    />
                  )}
                </div>

                <div>
                  <h5 className="text-slate-500 text-sm">
                    {blog.author.firstName} {blog.author.lastName}
                  </h5>
                  <div className="flex items-center text-xs text-slate-700">
                    <span>{formatCreatedAt(blog.createdAt)}</span>
                  </div>
                </div>
              </div>

              <div className="text-sm px-2 py-1 text-slate-700">
                <span>{blog.likes.length} Likes</span>
              </div>
            </div>

            <div className="absolute right-0 top-0">
              {isMe && (
                <button onClick={handleAction}>
                  <img src={threeDots} alt="3dots of Action" />
                </button>
              )}

              {showAction && (
                <div className="action-modal-container">
                  <button className="action-menu-item hover:text-lwsGreen">
                    <img src={editIcon} alt="Edit" />
                    Edit
                  </button>
                  <button
                    onClick={handleDeleteBlog}
                    className="action-menu-item hover:text-red-500"
                  >
                    <img src={deleteIcon} alt="Delete" />
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
