import {configureStore} from "@reduxjs/toolkit";
import userInfoReducers from "../reducers/userInfoReducers";




export default configureStore({
   reducer:{
    userInfo:userInfoReducers,
   }
});