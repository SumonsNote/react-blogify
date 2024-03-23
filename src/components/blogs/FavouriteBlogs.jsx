import { useEffect, useReducer } from "react";
import { actions } from "../../actions";
import useAxios from "../../hooks/useAxios";
import { blogReducer, initialState } from "../../reducers/blogReducer";
import FavouriteList from "./FavouriteList";

export default function FavouriteBlogs() {
  const [state, dispatch] = useReducer(blogReducer, initialState);
  const { api } = useAxios();

  const blogs = state?.blogs;

  useEffect(() => {
    dispatch({ type: actions.blog.DATA_FETCHING });
    const fetchFavouriteBlog = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/favourites`
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
    fetchFavouriteBlog();
  }, []);

  if (state?.loading) {
    return <div> We are working...</div>;
  }

  if (state?.error) {
    return <div> Error in fatching posts {state?.error?.message}</div>;
  }
  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Your Favourites ❤️
      </h3>

      <ul className="space-y-5 my-5">
        <FavouriteList blogs={blogs} />
      </ul>
    </div>
  );
}
