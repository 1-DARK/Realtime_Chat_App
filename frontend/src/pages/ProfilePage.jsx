import { useAuthStore } from "../store/useAuthStore";

const ProfilePage = () => {
  const [authUser, isUpdatingProfile, updateProfile] = useAuthStore();
  const handleImageUpload = (e) => {};
  return <div>Profile</div>;
};

export default ProfilePage;
