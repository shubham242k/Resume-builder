import "./css/Preview.css"
import "./TemplateBreakDown/TemplateBreakDown.css"
import OptionalButtonsResume from "./OptionalButtonsResume";
import ActualTemplate from "./ActualTemplate";
let Preview = () =>{
    return(
        <div className = "preview-container">
            <div className = "editing-preview-resume-container">
                <ActualTemplate></ActualTemplate> 
            </div>
            
            <OptionalButtonsResume />        
            
        </div>
        
    )
}

export default Preview;