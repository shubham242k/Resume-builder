let experienceReducer = (state = [],action) =>{
    switch(action.type){
        case "ADD_EXPERIENCE":
            return [...state,action.payload];
        case "DELETE_EXPERIENCE":
            let ns = state.filter((s)=>{
                return(s.exnumber !== action.payload)
            });
            return ns
        default:
            return state;
    }
}

export default experienceReducer;