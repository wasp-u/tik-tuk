import { combineReducers, createStore } from "redux";
import feedPage_reducer from "./feedPage_reducer";
import userFeedPage_reducer from "./userFeedPage_reducer";
import userInfoPage_reducer from "./userInfoPage_reducer";


let reduces = combineReducers({
    feedPage: feedPage_reducer,
    userInfoPage: userInfoPage_reducer,
    userFeedPage: userFeedPage_reducer,
})
let store = createStore(reduces);

export default store;