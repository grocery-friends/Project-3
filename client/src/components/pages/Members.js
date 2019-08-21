import React, { useEffect } from "react";
import NavTabs from "../NavTabs";
import AppBar from "../AppBar";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING, SET_CURRENT_USER } from "../../utils/actions";


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
      {/* <NavTabs /> */}
      <h1 className="text-center">{state.currentUser && state.currentUser.email} is logged in</h1>
      <p>
        
        Lorem ipsum dolor sit amet, est ut enim consequat. Nostrum fastidii partiendo sed ne, no
        mutat ludus aperiri mea, per in choro dolorem electram. Invidunt reprimique assueverit quo
        ne, eruditi graecis pro ut. Usu ut diceret scaevola evertitur, appareat voluptatibus ad vel.
      </p>
    </div>
  );
}

export default Members;
