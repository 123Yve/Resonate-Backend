import { generateToken } from "./generateToken.js";
import dotenv from "dotenv";
dotenv.config();

const joinRoom = async (req, res) => {
  //TODO: verify if the user with same username has requested for a token.
  try {
    console.log("Request Data: ", req.body);
    const roomName = req.body.room_name;
    const username = req.body.username;
    // Creating a token for the user
    const token = generateToken(roomName, username, false);
    res.json({
      msg: "Success",
      livekit_socket_url: `${process.env.LIVEKIT_SOCKET_URL}`,
      access_token: token,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: "Error" });
  }
};

export { joinRoom };
