const videoReducer =(state= {data:null},action)=>{
    switch(action.type){
        case 'POST_VIDEO':
            return {...state};
        case 'POST_LIKE':
            return {...state};
        case 'FETCH_ALL_VIDEOS':
            return {...state,data:action.payload};
        default:
            return state;
    }
}

export default videoReducer