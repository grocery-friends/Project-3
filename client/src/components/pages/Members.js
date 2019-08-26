import React, { useEffect } from "react";
import AppBar from "../AppBar";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING, SET_CURRENT_USER } from "../../utils/actions";
import Todolist from "./Todolist"
import Drawer from "../Drawer";
import Paper from "../paper";
import "./member.css";
import Autocomplete from "../Autocomplete";
import Paper2 from "../paper2"

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
      <div className="text-center">{state.currentUser && state.currentUser.email}</div>
      </div>
      <Paper />
      <Paper2 />
    </div>
  );
}

export default Members;
