import { useSelector } from "react-redux";

let Contacts = () =>{
    let {email,phone} = useSelector(state => state.details);
    let templateCode = useSelector(state => state.templateCode);
    return(
        <div className = {`employee-contacts`}>
            <span>{email}</span>
            {email === "" || phone === ""?"": <span> | </span>}
            <span>{phone}</span>
        </div>
    )
}

export default Contacts;