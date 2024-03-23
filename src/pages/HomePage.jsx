import { useEffect, useReducer } from "react";
import { actions } from "../actions";
import BlogList from "../components/blogs/BlogList";
import FavouriteBlogs from "../components/blogs/FavouriteBlogs";
import PopularBlogs from "../components/blogs/PopularBlogs";
import useAxios from "../hooks/useAxios";
import { blogReducer, initialState } from "../reducers/blogReducer";

export default function HomePage() {
  const [state, dispatch] = useReducer(blogReducer, initialState);
  const { api } = useAxios();

  useEffect(() => {
    dispatch({ type: actions.blog.DATA_FETCHING });
    const fetchBlog = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.blog.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        dispatch({
          type: actions.blog.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };
    fetchBlog();
  }, []);

  if (state?.loading) {
    return <div> We are working...</div>;
  }

  if (state?.error) {
    return <div> Error in fatching posts {state?.error?.message}</div>;
  }
  return (
    <main>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            <div className="space-y-3 md:col-span-5">
              <BlogList blogs={state?.blogs} />
            </div>

            <div className="md:col-span-2 h-full w-full space-y-5">
              <PopularBlogs />

              <FavouriteBlogs />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
