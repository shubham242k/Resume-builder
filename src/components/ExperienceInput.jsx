import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailCreator } from "../redux/actions/detailsAction";
import { experienceAdd, experienceDelete } from "../redux/actions/experienceAction";

let ExperienceInput = (props) =>{
    let [jobTitle,setJobTitle] = useState("");
    let [description,setDescription] = useState("");
    let [startDate,setStartDate] = useState("");
    let [endDate,setEndDate] = useState("");
    let [isAdded,setStatus] = useState(false);

    let dispatch = useDispatch();
    let {experience} = useSelector(state => state);

    useEffect(()=>{

        for(let i = 0;i<experience.length;i++){
            if(experience[i].ednumber == props.exNumber){
                setJobTitle(experience[i].jobTitle);
                setDescription(experience[i].description);
                setStartDate(experience[i].startDate);
                setEndDate(experience[i].endDate);
                setStatus(true);
                break;
            }
        }
    },[]);
    useEffect(()=>{
        console.log(experience);
        dispatch(detailCreator({experience}));
    },[experience]);


    return(
        <>
            <input type="text" className="form-control custom-form-control" placeholder="Job title"
                value = {jobTitle}
                onChange={(e)=>{
                    setJobTitle(e.currentTarget.value);
                }}/>

            <textarea type="text" className="form-control custom-form-control" placeholder="Summary"
               value = {description}
               onChange={(e)=>{
                   setDescription(e.currentTarget.value);
               }} />        
            <div className = "detail-group">    
           
                
                <input type="text" className="form-control custom-form-control" placeholder="Start Date"
                value = {startDate}
                onChange={(e)=>{
                    setStartDate(e.currentTarget.value);
                }}/>
                <input type="text" className="form-control custom-form-control" placeholder="End Date"
               value = {endDate}
               onChange={(e)=>{
                   setEndDate(e.currentTarget.value);
               }}/>


               {
               !isAdded?
                    <div className ="text-button"
                    onClick = {()=>{
                        if(jobTitle === "" || description === "" || startDate === "" || endDate === "") return;
                        setStatus(true);
                        dispatch(experienceAdd({exnumber:props.exNumber,jobTitle,description,startDate,endDate}));
                    }}>Confirm</div>
                    
                :

                    <div className ="text-button delete-text-button" ex-number ={props.exNumber} 
                    onClick = {(e)=>{
                        setStatus(false);
                        setJobTitle("");
                        setDescription("");
                        setEndDate("");
                        setStartDate("");
                        dispatch(experienceDelete(Number(e.currentTarget.getAttribute("ex-number"))));
                    }}>Remove</div>
                }
          
       </div>
        </>
    )
}

export default ExperienceInput;