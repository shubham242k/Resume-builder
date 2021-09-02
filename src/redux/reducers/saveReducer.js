let initialState = {
    loading : null,
    error : null,
    rid:"",
}
export const saveReducer = (state = initialState,action) =>{
    switch(action.type){
        case "SAVE_RESUME":
            return {...state,loading : true};
        case "SAVE_ERROR":
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        case "SAVE_COMPLETED":
            return{
                ...state,
                loading:false,
                rid : action.payload
            }
        
        default :
            return state;
    }
}
