import { useState } from "react";
import { auth } from "../firebase";

let Signup = () =>{
    let [password,setPassword] = useState("");
    let [confirmPassword,setConfirmPassword] = useState("");
    let [email,setEmail] = useState("");

    return(
        <div className = "login-container">

            <div className = "text-display">Register and Build</div>
            <div className="input-group">
                <input type="text" className="form-control email-input" placeholder="Email address" aria-label="Recipient's username" aria-describedby="basic-addon2"
                value = {email}
                onChange = {(e)=>{
                    setEmail(e.currentTarget.value);
                }}/>
            </div>

            <div className="input-group">
                <input type="text" className="form-control password-input" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2"
                value = {password}
                onChange = {(e)=>{
                    setPassword(e.currentTarget.value);
                }}/>
            </div>

            <div className="input-group">
                <input type="text" className="form-control password-input" placeholder="Confirm password" aria-label="Recipient's username" aria-describedby="basic-addon2"
                value = {confirmPassword}
                onChange = {(e)=>{
                    setConfirmPassword(e.currentTarget.value);
                }}/>
            </div>

            <button type="button" class="btn btn-primary login-button"
            onClick = {()=>{
                if(password !== "" && password === confirmPassword){
                    auth.createUserWithEmailAndPassword(email,password);
                }
            }}>Signup</button>

        </div>
    )
}

export default Signup;