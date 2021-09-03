import { useDispatch, useSelector } from "react-redux"
import { detailCreator } from "../redux/actions/detailsAction";
import EducationInput from "./EducationInput";
import ExperienceInput from "./ExperienceInput.jsx";
import "./css/PersonalData.css"
import Preview from "./Preview"
import { useEffect, useState } from "react";
import { skillAdd, skillDelete } from "../redux/actions/skillsAction";
import { Redirect } from "react-router";
let PersonalData = ()=>{
    let [currskill,setSkill] = useState("");
    let dispatch = useDispatch();
    let {skills,details} = useSelector(state => state);
    let {firstName,lastName,email,phone,summary} = details;
    let skillsindet = details.skill
    useEffect(()=>{
        dispatch(detailCreator({skill:skills}));
        
    },[skills]);
    let user = useSelector(state => state.user);
    return(
        <>
        {user?"":<Redirect to="/authentication"/>}
        <div className="personal-container">
            
            <div className = "personal-form">
                
                <div className = "personal-details detail-section">
                    <div className = "heading">Personal Details</div>
                    <div className = "detail-group">
                        <input type="text" className="form-control custom-form-control" placeholder="First Name"
                            value = {firstName}
                            onChange={(e)=>{
                                dispatch(detailCreator({firstName:e.currentTarget.value}))
                            }}/>
                        <input type="text" className="form-control custom-form-control" placeholder="Last Name"
                            value = {lastName}
                            onChange={(e)=>{
                                dispatch(detailCreator({lastName:e.currentTarget.value}))
                            }}/>
                    </div>

                    <div className = "detail-group">
                        <input type="text" className="form-control custom-form-control" placeholder="Email address"
                            value = {email}
                            onChange={(e)=>{
                                dispatch(detailCreator({email:e.currentTarget.value}))
                            }}/>
                        <input type="text" className="form-control custom-form-control" placeholder="Phone number"
                            value = {phone}
                            onChange={(e)=>{
                                dispatch(detailCreator({phone:e.currentTarget.value}))
                            }}/>
                    </div>

                </div>
                <div className = "summary-professional detail-section">
                    <div className = "heading">Professional summary</div>
                    <textarea type="text" className="form-control custom-form-control" placeholder="Description"
                    value = {summary}
                    onChange={(e)=>{
                        dispatch(detailCreator({summary:e.currentTarget.value}))
                    }}/>
                </div>

                <div className = "education detail-section">
                    <div className = "heading-and-button">
                        <div className = "heading">Education</div>
                        <div className = "text-button" 
                        onClick = {()=>{
                            
                        }}>Add more</div>
                    </div>
                    
                    <EducationInput edNumber = {0}/>
                    <div className = "line-breaker"></div>
                    <EducationInput edNumber = {1}/>
                    <div className = "line-breaker"></div>
                    <EducationInput edNumber = {2}/>
                </div>

                <div className = "experience detail-section">
                    <div className = "heading">Experience</div>
                    <ExperienceInput exNumber = {0}/>
                    <div className = "line-breaker"></div>
                    <ExperienceInput exNumber = {1}/>
                    <div className = "line-breaker"></div>
                    <ExperienceInput exNumber = {2}/>
                </div>

                <div className = "skills detail-section">
                    <div className = "heading">Skills (Upto 15)</div>
                    <input type="text" className="form-control custom-form-control" placeholder="Enter skills"
                    value = {currskill}
                    onChange={(e)=>{
                        
                        setSkill(e.currentTarget.value);
                    }}
                    
                    onKeyDown = {(e)=>{
                        if(e.key != "Enter" || currskill ==="") return;
                        if(skills.length >= 15){
                            alert("More than 15 skills not allowed");
                            return;
                        }
                        setSkill("");
                        dispatch(skillAdd(currskill));
                        
                    }}/>

                    <div className = "detail-group skill-inputs">
                        {
                        skillsindet.map((cs)=>{
                            return(
                                <div className ="skill-div"
                                onDoubleClick = {
                                    (e)=>{
                                        dispatch(skillDelete(e.currentTarget.innerText));
                                    }
                                }>{cs}</div>
                            )
                        })
                        }
                    </div>

                </div>
            </div>
            <Preview/>
        </div>
        </>
    )
}

export default PersonalData;