import React, {useEffect} from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

function NavTabs() {
  
  // useEffect(() => {
  //   API.logout()
  //     .then(res =>
  //     )
  //     .catch(err => console.log(err));
      
  // })

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/Logout" className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}>
          logout
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
