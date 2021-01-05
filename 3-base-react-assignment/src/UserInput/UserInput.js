import React from "react";
import "./UserInput.css";

const UserInput = (props) => {
  return (
    <input
      className="UserInput"
      onChange={(e) => props.changeHandler(e.target.value)}
      value={props.username}
      type="text"
    />
  );
};

export default UserInput;
