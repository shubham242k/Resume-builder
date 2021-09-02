import { useSelector } from "react-redux";

let Name = () =>{

    let {firstName,lastName} = useSelector(state => state.details);
    let templateCode = useSelector(state => state.templateCode);
    return(
        <div className = {`resume-name template-${templateCode}`}>
            <span>{firstName + " " + lastName}</span>
        </div>
    )
}

export default Name;