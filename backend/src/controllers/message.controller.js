import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserID = req.user._id; // ID of the currently logged-in user
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserID } }); // Find all users except the logged-in user
  } catch (error) {}
};
