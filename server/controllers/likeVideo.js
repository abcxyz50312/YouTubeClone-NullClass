import likedVideo from '../models/likedVideo.js'
import mongoose from 'mongoose'

export const likeVideoController = async(req,res)=>{
    const likedVideoData= req.body;

    // console.log(likedVideoData)
    const addToLikedVideo= new likedVideo(likedVideoData);

    try {
        await addToLikedVideo.save();
        res.status(200).json('added to likedVideo')
        // console.log("DOne")
    } catch (error) {
        res.status(400).json(error)       
    }
}

export const getAlllikeVideoController= async (req, res)=>{
    try {
      const files= await likedVideo.find();
      res.status(200).send(files)
    } catch (error) {
      res.status(404).send(error.message)
    }
  }

  
export const deleteLikeVideoController = async (req, res) => {
  const { videoId: videoId, Viewer: Viewer } = req.params;
  // console.log(videoId,Viewer)
  try {
    await likedVideo.findOneAndDelete({
      videoId: videoId,
      Viewer: Viewer,
    });
    res.status(200).json({ message: "Removed  from your watch Laters" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
