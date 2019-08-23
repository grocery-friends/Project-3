import React, { useEffect } from "react";
import AppBar from "../AppBar";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING, SET_CURRENT_USER } from "../../utils/actions";
import Todolist from "./Todolist"
import Drawer from "../Drawer";
import Paper from "../paper";
import "./member.css";


const Members = props => {


  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    dispatch({ type: LOADING });
    API.getCurrentUser(props.match.params.id)
      .then(user => dispatch({ type: SET_CURRENT_USER, user }))
      .catch(err => console.log(err));
  }, []);

 
  return (
    
    <div className="cont">
      <AppBar />
      <div className="contcont">
      <Drawer />
      <p className="text-center">{state.currentUser && state.currentUser.email}</p>
      </div>
      <Paper />
    </div>
  );
}

export default Members;
