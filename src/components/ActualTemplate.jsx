import "./css/Preview.css"
import Name from "./TemplateBreakDown/Name"
import Contacts from "./TemplateBreakDown/Contacts"
import ProfessionalSummary from "./TemplateBreakDown/ProfessionalSummary.jsx"
import EducationDetail from "./TemplateBreakDown/EducationDetail.jsx";
import "./TemplateBreakDown/TemplateBreakDown.css"
import { useSelector } from "react-redux"
import ExperienceDetail from "./TemplateBreakDown/ExperienceDetail";
import Skills from "./TemplateBreakDown/Skills";
let ActualTemplate = () =>{
    let {summary,education,experience,skill} = useSelector(state => state.details);
    let templateCode = useSelector(state => state.templateCode);
    return(
        <div className = {`preview-resume template-${templateCode}`}>
            <div className = {`resume-header resume-section template-${templateCode}`}>
                <Name/>
                <Contacts/>
            </div>
            
            <div className ={`resume-body resume-section template-${templateCode}`}> 
                {
                    summary === ""?"":<ProfessionalSummary/>   
                }
                {
                    education.length == 0 ? "": <EducationDetail/>
                }
                {
                    experience.length == 0 ? "": <ExperienceDetail/>
                }
                {
                    skill.length == 0?"":<Skills/>
                }
                
            </div>
            
        </div>
    )
}

export default ActualTemplate;