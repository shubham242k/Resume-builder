import { useSelector } from "react-redux";

let ExperienceDetail = () =>{
    let {experience} = useSelector(state => state.details);
    let templateCode = useSelector(state => state.templateCode);
    return(
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
                            <div className="detail-heading">{ex.jobTitle}</div>
                            <div className="detail">{ex.startDate + "-" + ex.endDate}</div>
                            <div className ="detail">{ex.description}</div>
                        </div>
                        
                            
                        
                        
                    </>)
                })
            }
            </div>
        </div>
    )
}

export default ExperienceDetail;