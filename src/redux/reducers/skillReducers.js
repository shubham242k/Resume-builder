let skillReducer = (state = [],action) =>{
    switch(action.type){
        case "ADD_SKILL":
            return [...state,action.payload];
        case "DELETE_SKILL":
            {
                let ns = state.filter((st)=>{
                    return (action.payload !== st);
                })
                return ns;
            }
        default :
            return state;
    }
}

export default skillReducer;