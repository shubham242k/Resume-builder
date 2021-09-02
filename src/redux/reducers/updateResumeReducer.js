let initialState = {
    loading : null,
    error : null,
}
export const updateResumeReducer = (state = initialState,action) =>{
    switch(action.type){
        case "UPDATE_RESUME":
            return {...state,loading : true};
        case "UPDATE_ERROR":
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        case "UPDATE_COMPLETED":
            return{
                ...state,
                loading:false,
            }
        
        default :
            return state;
    }
}
