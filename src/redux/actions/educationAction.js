export const educationAdd = (education)=>{
    return{
        type: "ADD_EDUCATION",
        payload:education
    }
}

export const educationDelete = (position) =>{
    return{
        type: "DELETE_EDUCATION",
        payload: position
    }
}