import React, { useEffect } from "react";

import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING, SET_CURRENT_USER } from "../../utils/actions";


const nameDisplay = props => {


  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    dispatch({ type: LOADING });
    API.getCurrentUser(props.match.params.id)
      .then(user => dispatch({ type: SET_CURRENT_USER, user }))
      .catch(err => console.log(err));
  }, []);

 
  return (
    
    <div>
      <p>{state.currentUser && state.currentUser.email} is logged in</p>
    </div>
  );
}

export default nameDisplay;
