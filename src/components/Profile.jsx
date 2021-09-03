import { useEffect, useState } from "react";
import "./css/Dashboard.css"
import {firestore} from "../firebase"
import { useSelector } from "react-redux";
import DashboardResmeTemplate from "./DashboardResmeTemplate";
import { Redirect } from "react-router";
let Profile = () =>{
    
    let [datas,setData] = useState(null);
    let user = useSelector(state => state.user);
    useEffect(async()=>{
        if(user){
            let querysnapshot = await  firestore.collection("resumes").where('uid', "==" ,user.uid).get();
            let docs = querysnapshot.docs;
            let dataArr = [];
            for(let i = 0;i<docs.length;i++){
                
                dataArr.push({...docs[i].data(),rid:docs[i].id});
            }
            
            setData(dataArr);
            console.log(datas);
        }
        
    },[]);

    let deleteResume = async(resumeid) =>{
        await firestore.collection("resumes").doc(resumeid).delete();
        let newDatas = datas.filter(data =>{
            return (data.rid != resumeid);
        })
        setData(newDatas);
    }
    return(
        <>
        {user?"":<Redirect to ="/authentication"/>}
        <div className = "dashboard-container">
            {   
            datas && datas.length !=0?
                <>
                {console.log(datas)}
                <div className = "dashobard-header">
                    <div>DashBoard</div>
                </div>
                <div className ="line-breaker"></div>

                <div className ="template-all">

                    
                    {
                    datas.map((data)=>{
                        return(
                            <DashboardResmeTemplate data = {data} deleteResume ={deleteResume}/>
                        )
                    })
                    }
                    

                </div>
            </>
            :
            <div className = "empty-message">
                EMPTY DASHBOARD
            </div>
            }
        
            
        </div>
        </>
    )
}

export default Profile;