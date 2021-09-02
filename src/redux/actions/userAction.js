export const createuser = (user)=>{
    return({
        type : "SET_USER",
        payload : user,
    })
}

