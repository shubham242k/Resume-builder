import { useState } from "react"
import "./css/Form.css";
import {useSelector} from "react-redux";
import Login from "./Login"
import Signup from "./Signup"
import {Redirect} from "react-router-dom"
let Form = () =>{
    let [whichForm,setForm] = useState("login");
    let user = useSelector(state => state.user);
    return(
        <>
        {user?<Redirect to = "/home"/>:""}
        <div className = "form-container">
            <div className = "form-display"></div>
            <div className = "form-section">
                <div className = "option-section">
                    <div className = {`login-option option ${whichForm == "login"?"selected-option" : ""}`}
                        onClick = {
                            ()=>{
                                setForm("login");
                            }
                        }>Login</div>
                    <div className = {`signup-option option ${whichForm == "signup"?"selected-option" : ""}`}
                        onClick = {
                            ()=>{
                                setForm("signup");
                            }
                        }>Signup</div>
                </div>

                {whichForm == "login"? <Login></Login> : <Signup></Signup>}
                
            </div>
        </div>
        </>
    )
}

export default Form;