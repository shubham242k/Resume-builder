import { useSelector } from "react-redux";

let EducationDetail = () =>{
    let {education} = useSelector(state => state.details);
    let templateCode = useSelector(state => state.templateCode);
    return(
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
    )
}

export default EducationDetail;