import React from "react";

const Validation = (props) => {

  let warningMessage = null;

  if (props.length < 5) {
    warningMessage = <p>Text too short</p>;
  } else if (props.length > 10) {
    warningMessage = <p>Text too long</p>;
  }

  return <div>{warningMessage}</div>;
};
export default Validation;
