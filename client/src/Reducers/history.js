const HistoryReducer=(state = {data:null},action)=>{
    switch (action.type)
    {
        case 'POST_HISTORY':
            return { ...state, data: action?.data };
        case 'FETCH_ALL_HISTORY_VIDEOS':
            return {...state,data:action.payload};
        default:
            return state;
    }
    
}
export default HistoryReducer