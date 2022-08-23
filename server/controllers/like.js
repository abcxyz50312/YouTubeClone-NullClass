import videoFiles from "../models/videoFiles.js";
import mongoose from "mongoose";

export const likeController = async (req, res) => {
  const { id: _id } = req.params;
  const { Like } = req.body;

  // console.log(_id,Like)
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Video Unavailable..");
  }
  try {
    const updateLike = await videoFiles.findByIdAndUpdate(
      _id,
      {
        $set:{"Like":Like}
      }
    )
    res.status(200).json(updateLike)
  } catch (error) {
    res.status(400).json("error : ",error)
  }
};
