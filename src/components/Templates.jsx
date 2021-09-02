import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { templateCreator } from "../redux/actions/templateActions";
import "./css/Templates.css"
let Templates = () =>{
    let dispatch = useDispatch();
    let history = useHistory();
    return(
        <div className = "template-container">
                <div className = "template template1" 
                onClick={()=>{
                    history.push("/personaldata");
                    dispatch(templateCreator("A"))
                }}>
                    <img src="http://localhost:3000/template1.svg"/>
                </div>
                <div className = "template template2"
                onClick={()=>{
                    history.push("/personaldata");
                    dispatch(templateCreator("B"))
                }}>
                    <img src="http://localhost:3000/template2.svg"/>
                </div>
        </div>
    )
}

export default Templates;