import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailCreator } from "../redux/actions/detailsAction";
import { educationAdd, educationDelete } from "../redux/actions/educationAction";

let EducationInput = (props) =>{
    let {education} = useSelector(state => state);
    
    let [schoolname,setSchoolname] = useState("");
    let [degree,setDegree] = useState("");
    let [year,setYear] = useState("");
    let[isAdded,setStatus] = useState(false);
    let dispatch = useDispatch();
    useEffect(()=>{
        console.log("try");
        console.log(education);
        for(let i = 0;i<education.length;i++){
            if(education[i].ednumber == props.edNumber){
                console.log("anything");
                setSchoolname(education[i].schoolname);
                setDegree(education[i].degree);
                setYear(education[i].year);
                setStatus(true);
                break;
            }
        }
    },[]);
    useEffect(()=>{
        console.log(education);
        dispatch(detailCreator({education}));
        
    },[education]);
    return(
        <>
            <input type="text" className="form-control custom-form-control" placeholder="Institution name"
                value = {schoolname}
                onChange={(e)=>{
                    setSchoolname(e.currentTarget.value);
                }}/>

            <div className = "detail-group">    
           
            
                <input type="text" className="form-control custom-form-control" placeholder="Passing year"
                value = {year}
                onChange={(e)=>{
                    setYear(e.currentTarget.value);
                }}/>
                <input type="text" className="form-control custom-form-control" placeholder="Degree"
               value = {degree}
               onChange={(e)=>{
                   setDegree(e.currentTarget.value);
               }}/>


            {
               !isAdded?
                    <div className ="text-button"
                    onClick = {()=>{
                        if(schoolname === "" || year === "" || degree === "") return;
                        setStatus(true);
                        dispatch(educationAdd({ednumber:props.edNumber,schoolname,degree,year}));
                    }}>Confirm</div>
                    
                :

                    <div className ="text-button delete-text-button" ed-number ={props.edNumber} 
                    onClick = {(e)=>{
                        setDegree("");
                        setSchoolname("");
                        setYear("");
                        
                        setStatus(false);
                        dispatch(educationDelete(Number(e.currentTarget.getAttribute("ed-number"))));
                    }}>Empty</div>
                }
          
            </div>
        </>
    )
}

export default EducationInput;