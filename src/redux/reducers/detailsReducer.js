let initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone:"",
    summary: "",
    experience :[],
    education: [],
    skill:[],
    isPublic:false,
}
let detailsReducer = (state = initialState,action)=>{
    switch(action.type){
        case "SET_DETAILS":
            return {...state,...action.payload};
        default :
            return state;
    }
}

export default detailsReducer;