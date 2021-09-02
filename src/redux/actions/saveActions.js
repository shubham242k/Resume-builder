import { firestore } from "../../firebase"

export const saveResumeCreator = () =>{
    return{
        type : "SAVE_RESUME"
    }
}

export const saveErrorCreator = (err) =>{
    return{
        type : "SAVE_ERROR",
        payload : err,
    }
}
export const saveCompleteCreator = (id) =>{
    return{
        type : "SAVE_COMPLETED",
        payload : id,
    }
}

export const saveResume =(uid,details,code)=>{
    return (dispatch) =>{
        dispatch(saveResumeCreator());

        firestore.collection("resumes").add({
            uid,
            details,
            code
        }).then((docRef)=>{
            return docRef.get();
        }).then((doc)=>{
            dispatch(saveCompleteCreator(doc.id));
        }).catch((err)=>{
            dispatch(saveErrorCreator(err));
        })
    }
}