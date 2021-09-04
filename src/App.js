import Form from "./components/Form";
import "./components/css/App.css"
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { auth, firestore } from "./firebase";
import {createuser} from "./redux/actions/userAction";
import { BrowserRouter as Router, Switch, Route, Redirect, Link, HashRouter } from "react-router-dom";
import PublicPreview from "./components/PublicPreview";
import Profile from "./components/Profile";
import Templates from "./components/Templates";
import PersonalData from "./components/PersonalData";
import "./components/css/NavBar.css"
let App = () => {
  let dispatch = useDispatch();
  
  useEffect(()=>{
    let unsub = auth.onAuthStateChanged(async(user) =>{
        dispatch(createuser(user));
        if(user){
          let {uid, email} = user;
          let docRef = firestore.collection("users").doc(uid);
          let doc = await docRef.get();
          if(!doc.exists){
            docRef.set({
              email,
            })
          }

        }
    });

    return () =>{
      unsub();
    }
  },[])

  let user = useSelector(state => state.user);
  return (
    <>
          

    <HashRouter basename = "/">
      {
        user?
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className ="navbar-brand title-navbar">ResumeBuilder</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse nav-list" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

            <li className="nav-item">
                <Link className="nav-link" to="/templates">Templates</Link>
            </li>
            
            <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>

            <li className="nav-item" onClick = {()=>{
              auth.signOut();
            }}>
                <Link className="nav-link" to="/authentication">Logout</Link>
            </li>
            </ul>
        </div>
      </nav>
     :""
      }

        <Route path = "/">
            {
            <Redirect to ="/home"/>
            }
        </Route>
        <Route path = "//public-preview/:rid">
            <PublicPreview/>
        </Route>
        <Route path = "/authentication">
          <div className = "screen-main">
            <Form/>
          </div>
        </Route>
        <Route path = "/dashboard"><Profile></Profile></Route>
        <Route path = "/home"><Redirect to="/templates"/></Route>
        <Route path = "/templates"><Templates></Templates></Route>
        <Route path = "/personaldata"><PersonalData/></Route>

    </HashRouter>
    </>
    
    
  );
}

export default App;
