import { useDispatch, useSelector } from "react-redux";
import { detailCreator } from "../redux/actions/detailsAction";
import { saveResume } from "../redux/actions/saveActions";
import { updateResume } from "../redux/actions/updateResumeAction";

let OptionalButtonsResume = () =>{
    let dispatch = useDispatch();

    let details = useSelector(state => state.details);
    let user = useSelector(state => state.user);
    let uid;
    if(user)
        uid = user.uid;
    let templateCode = useSelector(state => state.templateCode);
    let saveState = useSelector(state => state.saveState);
    let isPublic = details.isPublic;
    return(
        <div className = "optional-buttons">
            {
                saveState.rid === ""?"":
                <button type="button" class="btn btn-light"
                    onClick = {
                        ()=>{
                            dispatch(updateResume(saveState.rid,details,templateCode));
                        }
                    }>Save same to Database</button>
            }
            <button type="button" class="btn btn-light"
            onClick = {
                ()=>{
                    dispatch(saveResume(uid,details,templateCode))
                }
            }>Save new to Database</button>
            <button type="button" class="btn btn-light">Download PDF</button>
            {
                !isPublic?"":
                <button type="button" class="btn btn-light"
                    onClick ={
                        ()=>{
                            if(saveState.rid === ""){
                                alert("TO generate Link, Save to database");
                            }else{
                            alert(`localhost:3000/public-preview/${saveState.rid}`);
                            }
                            
                        }
                    }>Generate Link</button>
            }
            
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                checked = {isPublic}
                onClick = {
                    ()=>{
                        let np = isPublic?false:true;
                        dispatch(detailCreator({ isPublic: np}))
                    }
                }/>
                <label class="form-check-label" for="flexCheckDefault">
                    Make Public
                </label>
            </div>
        </div>
    )
}

export default OptionalButtonsResume;