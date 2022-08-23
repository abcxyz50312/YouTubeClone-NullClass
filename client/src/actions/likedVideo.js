import * as api from "../api";

export const addTolikedVideo=(likedVideoData)=>async(dispatch)=>{
    try {
        const { data } = await api.addToLikedVideo(likedVideoData);
        dispatch({ type: "POST_LIKEDVIDEO", data });
        dispatch(getAlllikedVideo())
      } catch (error) {
        console.log(error);
      }
}

export const getAlllikedVideo=()=> async (dispatch)=>{
    try {
      const {data}= await api.getAlllikedVideo();
      dispatch({type:'FETCH_ALL_LIKED_VIDEOS',payload:data})
    } catch (error) {
        console.log(error)
    }
  }

  export const deletelikedVideo =(likedVideoData)=> async(dispatch)=>{
    try {
        const {videoId,Viewer}=likedVideoData;
        await api.deletelikedVideo(videoId,Viewer);
        dispatch(getAlllikedVideo());
    } catch (error) {
        console.log(error)
    }
  }