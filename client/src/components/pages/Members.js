import React, { useEffect } from "react";
import NavTabs from "../NavTabs";
import AppBar from "../AppBar";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING, SET_CURRENT_USER } from "../../utils/actions";
import Todolist from "./Todolist"
import Drawer from "../Drawer"

const Members = props => {


  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    dispatch({ type: LOADING });
    API.getCurrentUser(props.match.params.id)
      .then(user => dispatch({ type: SET_CURRENT_USER, user }))
      .catch(err => console.log(err));
  }, []);

 
  return (
    
    <div>
      <AppBar />
      <Drawer />
      <h1 className="text-center">{state.currentUser && state.currentUser.email} is logged in</h1>
      <Todolist />
    </div>
  );
}

export default Members;
