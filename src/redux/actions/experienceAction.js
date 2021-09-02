export const experienceAdd = (education)=>{
    return{
        type: "ADD_EXPERIENCE",
        payload:education
    }
}

export const experienceDelete = (position) =>{
    return{
        type: "DELETE_EXPERIENCE",
        payload: position
    }
}