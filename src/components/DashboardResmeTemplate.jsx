import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./css/Preview.css"
import "./TemplateBreakDown/TemplateBreakDown.css"
import { detailCreator } from "../redux/actions/detailsAction";
import { saveCompleteCreator } from "../redux/actions/saveActions";
import { templateCreator } from "../redux/actions/templateActions";
import { useState } from "react";
import { educationAdd } from "../redux/actions/educationAction";
import { experienceAdd } from "../redux/actions/experienceAction";
import { skillAdd } from "../redux/actions/skillsAction";

let DashboardResmeTemplate = (props) =>{
    let dispatch = useDispatch();
    let history = useHistory();
    let {code,details} = props.data;
    let [isVisible,setVisibility] = useState(false);
    let templateCode = code;
    let {firstName,lastName,email,phone,education,experience,skill,summary} = details;
    return(
        <div className = "dashboard-preview-resume-container" 
        onMouseEnter = {()=>{
            setVisibility(true);
        }}
        onMouseLeave = {()=>{
            setVisibility(false);
        }}>
        <div className = {`preview-resume template-${templateCode}`}
        >
            <div className = {`resume-header resume-section template-${templateCode}`}>
                <div className = {`resume-name template-${templateCode}`}>
                    <span>{firstName + " " + lastName}</span>
                </div>
                <div className = {`employee-contacts`}>
                    <span>{email}</span>
                    {email === "" || phone === ""?"": <span> | </span>}
                    <span>{phone}</span>
                </div>
            </div>
            
            <div className ={`resume-body resume-section template-${templateCode}`}> 
                {
                    summary === ""?"":
                    <div className ={`detail-groups template-${templateCode}`}>
                        <div className = "section-heading">{templateCode ==="A"?"Summary":"Professional Summary"}</div>
                        {
                            templateCode === "A"?"": <div className = "line-breaker"></div>
                        }
                        
                        <div className = "detail">{summary}</div>
                    </div> 
                }
                {
                    education.length == 0 ? "":
                    <div className ={`detail-groups template-${templateCode}`}>
                        <div className = "section-heading">Education</div>
                        {
                            templateCode === "A"?"": <div className = "line-breaker"></div>
                        }
                        <div className = "detail-box">
                        {
                            education.map((ed) => {
                                return(<>
                                    
                                    <div className ="detail-per-box">
                                        <div className="detail-heading">{ed.schoolname}, {ed.year}</div>
                                        <div className ="detail">{ed.degree}</div>
                                    </div>
                                    
                                        
                                    
                                    
                                </>)
                            })
                        }
                        </div>
                    </div>
                }
                {
                    experience.length == 0 ? "":
                    <div className ={`detail-groups template-${templateCode}`}>
                        <div className = "section-heading">Experience</div>
                        {
                            templateCode === "A"?"": <div className = "line-breaker"></div>
                        }
                        <div  className = "detail-box">
                        {
                            experience.map((ex) => {
                                return(<>
                                    
                                    <div className ="detail-per-box">
                                        <div className="detail-heading">{ex.jobTitle}, {ex.startDate + "-" + ex.endDate}</div>
                                        <div className ="detail">{ex.description}</div>
                                    </div>
                                    
                                        
                                    
                                    
                                </>)
                            })
                        }
                        </div>
                    </div>
                }
                {
                    skill.length == 0?"":
                    <div className ={`detail-groups template-${templateCode}`}>
                        <div className = "section-heading">Tech Skills</div>
                        {
                            templateCode === "A"?"": <div className = "line-breaker"></div>
                        }
                        <div className = {`skill-preview-group template-${templateCode}`}>
                            {
                                skill.map((sk) => {
                                    return(<>
                                        <div className ={`skill-preview template-${templateCode}`}>{sk}</div>                          
                                    </>)
                                })
                            }
                        </div>
                        
                    </div>
                }
                
            </div>
            
        </div>

        {
            !isVisible?"":
            <>
                <div className = "option-button-container">
                <div className = "option-button link-button"
                onClick ={()=>{
                    alert(`https://shubham242k.github.io/Resume-builder/#/public-preview/${props.data.rid}`);
                }}>
                    <span class="material-icons-outlined">link</span>
                </div>

                <div className = "option-button change-button"
                onClick ={()=>{
                    dispatch(detailCreator({...details}));
                    dispatch(saveCompleteCreator(props.data.rid));
                    dispatch(templateCreator(templateCode));
                    dispatch(educationAdd(details.education));
                    dispatch(experienceAdd(details.experience));
                    dispatch(skillAdd(details.skill));
                    history.push("/personaldata");
                }}>
                    <span class="material-icons-outlined">settings</span>
                </div>

                <div className = "option-button delete-button"
                onClick ={async()=>{
                   props.deleteResume(props.data.rid);
                }}>
                    <span class="material-icons-outlined">delete</span>
                </div>
                </div>
            </>
        }
        </div>
    )

     
}

export default DashboardResmeTemplate;