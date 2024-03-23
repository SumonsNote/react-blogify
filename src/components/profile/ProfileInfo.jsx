import { useProfile } from "../../hooks/useProfile";
import Bio from "./Bio";
import ProfileImage from "./ProfileImage";

export default function ProfileInfo({ blogs }) {
  const { state } = useProfile();
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <ProfileImage />
      <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
        Welcome, {state?.user?.firstName} {state?.user?.lastName}
        {/* <p>You have {state?.blogs?.length} blogs.</p> */}
      </h3>
      <p className="leading-[231%] lg:text-lg">{state?.user?.email}</p>
      <Bio />
    </div>
  );
}
