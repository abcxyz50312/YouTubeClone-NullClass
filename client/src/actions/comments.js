import * as api from "../api";

export const editComment=(CommentData)=>async(dispatch)=>{
    try {
        const {id,commentBody}=CommentData;
        const {data}= await api.editComment(id,commentBody);
        dispatch({type:"EDIT_COMMENT",payload:data})
        dispatch(getAllComment())
    } catch (error) {
        console.log(error);
      }
}
export const postComment=(CommentData)=>async(dispatch)=>{
    try {
        const { data } = await api.postComment(CommentData);
        // console.log(CommentData)
        dispatch({ type: "POST_COMMENT",payload:data });
        dispatch(getAllComment())
    } catch (error) {
        console.log(error);
      }
}

export const getAllComment=()=> async (dispatch)=>{
    try {
        const {data}= await api.getAllComment();
        console.log(data)
      dispatch({type:'FETCH_ALL_COMMENTS',payload:data})
    } catch (error) {
        console.log(error)
    }
  }

  export const deleteComment =(id)=> async(dispatch)=>{
    try {
        console.log(id)
        await api.deleteComment(id);
        dispatch(getAllComment());
    } catch (error) {
        console.log(error)
    }
  }

