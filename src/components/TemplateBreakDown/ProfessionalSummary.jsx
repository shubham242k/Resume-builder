import { useSelector } from "react-redux"

let ProfessionalSummary = () =>{
    let {summary} = useSelector(state => state.details);
    let templateCode = useSelector(state => state.templateCode);
    return(
        <div className ={`detail-groups template-${templateCode}`}>
            <div className = "section-heading">{templateCode ==="A"?"Summary":"Professional Summary"}</div>
            {
                templateCode === "A"?"": <div className = "line-breaker"></div>
            }
            
            <div className = "detail">{summary}</div>
        </div>
        
        
    )
}

export default ProfessionalSummary