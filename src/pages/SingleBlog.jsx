import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleBlogComment from "../components/singleBlog/SingleBlogComment";
import SingleBlogFloating from "../components/singleBlog/SingleBlogFloating";
import SingleBlogInfo from "../components/singleBlog/SingleBlogInfo";
import useAxios from "../hooks/useAxios";

export default function SingleBlog() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [blog, setBlog] = useState("");
  const { api } = useAxios();

  useEffect(() => {
    const fetchSingleBlog = async () => {
      setLoading(true);
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/${id}`
        );
        if (response.status === 200) {
          setBlog(response.data);
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSingleBlog();
  }, []);

  if (loading) {
    return <div> We are working...</div>;
  }

  if (error) {
    return <div> Error in fetching blogs: {error}</div>;
  }

  if (!blog) {
    return <div> No data available.</div>;
  }
  return (
    <>
      <SingleBlogInfo blog={blog} />
      <SingleBlogComment />
      <SingleBlogFloating blog={blog} />
    </>
  );
}
