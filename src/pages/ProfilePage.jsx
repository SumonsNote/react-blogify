import { useEffect, useState } from "react";

import { actions } from "../actions";
import MyBlogs from "../components/profile/MyBlogs";
import ProfileInfo from "../components/profile/ProfileInfo";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";

export default function ProfilePage() {
  const { state, dispatch } = useProfile();
  const [blogs, setBlogs] = useState([]);

  const { api } = useAxios();
  const { auth } = useAuth();
  // console.log(blogs);

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    fetchProfile();
  }, []);

  if (state?.loading) {
    return <div> Fetching your Profile data...</div>;
  }
  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container">
        <div className="flex flex-col items-center py-8 text-center">
          <ProfileInfo />
        </div>
        <MyBlogs />
      </div>
    </main>
  );
}
