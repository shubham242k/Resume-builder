import { combineReducers } from "redux";
import detailsReducer from "./reducers/detailsReducer";
import educationReducer from "./reducers/educationReducer";
import experienceReducer from "./reducers/experienceReducer";
import { saveReducer } from "./reducers/saveReducer";
import skillReducer from "./reducers/skillReducers";
import templateReducer from "./reducers/templateReducer";
import { updateResumeReducer } from "./reducers/updateResumeReducer";
import  userReducer from "./reducers/userReducer";

let rootReducer = combineReducers({
    templateCode : templateReducer,
    user : userReducer,
    details : detailsReducer,
    education : educationReducer,
    experience : experienceReducer,
    skills : skillReducer,
    saveState : saveReducer,
    updateState : updateResumeReducer
});

export default rootReducer;