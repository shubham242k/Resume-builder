export const skillAdd = (skill)=>{
    return{
        type: "ADD_SKILL",
        payload:skill
    }
}

export const skillDelete = (skill) =>{
    return{
        type: "DELETE_SKILL",
        payload: skill
    }
}