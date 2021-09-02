import Form from "./components/Form";
import "./components/css/App.css"
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { auth, firestore } from "./firebase";
import {createuser} from "./redux/actions/userAction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PublicPreview from "./components/PublicPreview";
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
  return (
    <>
    <Router>
      <Switch>
        <Route path = "/public-preview/:rid">
            <PublicPreview/>
        </Route>
        <Route path = "/authentication">
          <div className = "screen-main">
            <Form/>
          </div>
        </Route>
        <Route path = "/">
            <Home/>
        </Route>
       
        
      </Switch>
    </Router>
    </>
    
    
  );
}

export default App;
