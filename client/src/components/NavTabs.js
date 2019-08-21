import React, {useEffect} from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { LOADING, CLEAR_CURRENT_USER } from "../utils/actions";

const NavTabs = props => {
  
  const [state, dispatch] = useStoreContext();

      const handleOnClick = event => {
        event.preventDefault();
        dispatch({ type: LOADING });
        API.logout()
          .then(user => {dispatch({ type: CLEAR_CURRENT_USER, user });
          window.location.replace("/")})
          .catch(err => console.log(err));
      
      };


  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a onClick={handleOnClick} href="/logout" className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}>
          logout
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
