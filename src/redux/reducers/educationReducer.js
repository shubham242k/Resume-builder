let educationReducer = (state = [],action) =>{
    switch(action.type){
        case "ADD_EDUCATION":
            return [...state,action.payload];
        case "DELETE_EDUCATION":
            
            let ns = state.filter((s)=>{
                return(s.ednumber !== action.payload)
            });
            return ns
        default:
            return state;
    }
}

export default educationReducer;