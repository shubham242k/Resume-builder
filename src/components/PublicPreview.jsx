import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import { detailCreator } from "../redux/actions/detailsAction";
import { templateCreator } from "../redux/actions/templateActions";
import ActualTemplate from "./ActualTemplate";

let PublicPreview = ()=>{
    let {rid} = useParams();

    let dispatch = useDispatch();
    useEffect(()=>{
        firestore.collection("resumes").doc(rid).get().then((doc)=>{
            let data = doc.data();
            if(data){
                dispatch(detailCreator({...data.details}));
                dispatch(templateCreator(data.code));
            }
        })
    },[]);


    return(
        <div className = "preview-container-public">
            <div className = "editing-preview-resume-container">
                <ActualTemplate/>
            </div>
            
        </div>       
    )
}

export default PublicPreview;