import { useState } from "react";
import { auth,signInWithGoogle } from "../firebase";
import "./css/Login.css";
let Login = () =>{
    let [password,setPassword] = useState("");
    let [email,setEmail] = useState("");

    
    return(
        <div className = "login-container">

            <div className = "text-display">Welcome back!</div>
            <div className="input-group ">
                <input type="text" className="form-control" placeholder="Email address" aria-label="Recipient's username" aria-describedby="basic-addon2"
                value = {email}
                onChange = {(e)=>{
                    setEmail(e.currentTarget.value);
                }}/>
            </div>

            <div className="input-group">
                <input type="text" className="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2"
                value = {password}
                onChange = {(e)=>{
                    setPassword(e.currentTarget.value);
                }}/>
            </div>

            <button type="button" class="btn btn-primary login-button"
            onClick = {()=>{
               auth.signInWithEmailAndPassword(email,password);
            }}>Login</button>
            <button type="button" class="btn btn-primary google-button"
            onClick={()=>{
                signInWithGoogle();
            }}>Sign in with Google</button>

        </div>
    )
}

export default Login;