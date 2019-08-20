import React, { useEffect } from "react";
import NavTabs from "../NavTabs";
import API from "../../utils/API";


function Members() {

  // componentDidMount() {
  //   API.getCurrentUser()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // }

    useEffect(() => {
    API.getCurrentUser()
      .then(res =>
      res.email
      )
      .catch(err => console.log(err));
      
  })
  
  return (
    
    <div>
      <NavTabs />
      <h1 className="text-center">You are logged in</h1>
      <p>
        Lorem ipsum dolor sit amet, est ut enim consequat. Nostrum fastidii partiendo sed ne, no
        mutat ludus aperiri mea, per in choro dolorem electram. Invidunt reprimique assueverit quo
        ne, eruditi graecis pro ut. Usu ut diceret scaevola evertitur, appareat voluptatibus ad vel.
      </p>
    </div>
  );
}

export default Members;
