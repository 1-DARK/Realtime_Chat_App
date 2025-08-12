import User from "../models/user.model.js";
import Message from "../models/message.model.js";
export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserID = req.user._id; // ID of the currently logged-in user
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserID },
    }).select("-password"); // Find all users except the logged-in user
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersForSidebar", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatID } = req.params;
    const myId = req.user._id;
    const messages = await Message.find({
      $or: [
        {
          myId: myId,
          receiverId: userToChatID,
        },
        {
          myId: userToChatID,
          receiverId: myId,
        },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
