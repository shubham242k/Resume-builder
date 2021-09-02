import { firestore } from "../../firebase"

export const updateResumeCreator = () =>{
    return{
        type : "UPDATE_RESUME"
    }
}

export const updateErrorCreator = (err) =>{
    return{
        type : "UPDATE_ERROR",
        payload : err,
    }
}
export const updateCompleteCreator = () =>{
    return{
        type : "UPDATE_COMPLETED",
    }
}

export const updateResume = (rid,details,code) =>{
    return (dispatch) =>{
        dispatch(updateResumeCreator);

        firestore.collection("resumes").doc(rid).update(
            {
                details,
                code,
            }
        ).then(()=>{
            dispatch(updateCompleteCreator());
        }).catch((err)=>{
            dispatch(updateErrorCreator(err));
        })
    }
}