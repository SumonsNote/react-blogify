import { useState } from "react";
import Comment from "../../assets/icons/comment.svg";
import Heart from "../../assets/icons/heart.svg";
import LikeFilledIcon from "../../assets/icons/like-filled.svg";
import LikeIcon from "../../assets/icons/like.svg";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

export default function SingleBlogFloating({ blog }) {
  const { auth } = useAuth();
  const [isLiked, setIsLiked] = useState(
    blog.likes.some((like) => like.id === auth.user.id)
  );

  const { api } = useAxios();

  const handleLike = async () => {
    try {
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/${blog.id}/like`
      );

      if (response.status === 200) {
        setIsLiked(true);
      }
    } catch (error) {
      console.error(error);
      setIsLiked(false);
    }
  };
  return (
    <div className="floating-action">
      <ul className="floating-action-menus">
        <li onClick={handleLike}>
          <img src={isLiked ? LikeFilledIcon : LikeIcon} alt="Like" />
          <span>{blog.likes.length}</span>
        </li>

        <li>
          <img src={Heart} alt="Favourite" />
        </li>
        <a href="#comments">
          <li>
            <img src={Comment} alt="Comments" />
            <span>{blog.comments.length}</span>
          </li>
        </a>
      </ul>
    </div>
  );
}
