import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Templates from "./Templates";
import Profile from "./Profile";
import "./css/NavBar.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { auth } from "../firebase";
import PersonalData from "./PersonalData";

let Home = () =>{
    let user = useSelector(state => state.user);
    return(
        <>
            {user ?"":<Redirect to="/authentication"/>}
        <Router>
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
                    <Link className="nav-link" to="/profile">Dashboard</Link>
                </li>

                <li className="nav-item"
                onClick = {()=>{
                   auth.signOut();
                }}>
                    <a className="nav-link" href="#">Logout</a>
                </li>
                </ul>
            </div>
        </nav>

        <Switch>
            <Route path = "//"><Redirect to="/templates"/></Route>
            <Route path = "/templates"><Templates></Templates></Route>
            <Route path = "/profile"><Profile></Profile></Route>
            <Route path = "/personaldata">
            <PersonalData/>
        </Route>
        </Switch>
            
        </Router>
        </>
        
        
    )
}

export default Home;