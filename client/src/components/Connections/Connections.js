import React from "react";
import { Link } from "react-router-dom";
import "./Connections.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

// function Based React Component
function Connections(props) {
  let heading = "Connections";

  if (props.userViewing === true) {
    heading = "My Connections";
  } else if (props.userViewing === false) {
    heading = "Her Connections";
  } else if (!props.userViewing) {
    heading = "Members";
  }

  let userArray = props.users.map((person, index) => {
    let userLastInitial = person.last_name.slice(0, 1) + ".";
    if (index < 4) {
      return (
        <div key={person.id} className="Connections__person">
          <ProfilePicture type="small" image={person.image ? person.image : require('../../assets/images/profile_default.svg')} />
          <p className="Connections--name">
            {person.first_name} {userLastInitial}
          </p>
        </div>
      );
    } else if (index === 4) {
      return (
        <div className="Connections__person">
          <div className="Connections__person__div">
            <Link className="Connections__link" to={props.to}>
              {props.extraUsers}
            </Link>
          </div>
        </div>
      );
    } else return null;
  });
  return (
    <div className="Connections">
      <h1 className="Connections__heading">{heading}</h1>
      <div className="Connections__list">{userArray}</div>
    </div>
  );
}

Connections.defaultProps = {
  users: [],
  extraUsers: "View All",
  to: "PATH"
};

export default Connections;
