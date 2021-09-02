import { useSelector } from "react-redux";

let Skills = () =>{
    let {skill} = useSelector(state => state.details);
    let templateCode = useSelector(state => state.templateCode);
    return(
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
    )
}

export default Skills