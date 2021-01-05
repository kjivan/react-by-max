import React from "react";

const Char = (props) => {
  const style = {
    display: "inline-block",
    padding: 16,
    textAlign: "center",
    margin: 16,
    border: "1px solid black",
  };
  return (
    <div onClick={() => props.removeChar(props.charIndex)} style={style}>{props.char}</div>
  );
};

export default Char;

