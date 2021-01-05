import React from "react";

const UserOutput = (props) => {
  const h1Style = {
    fontWeight: 200,
    fontSize: 40,
    color: "#999",
    marginTop: 20,
    marginBottom: 10,
  };
  return (
    <div>
      <h1 style={h1Style}>{props.username}</h1>
      <p>
        Ipsum itaque vel nobis enim doloremque Neque laudantium architecto
        voluptatum excepturi earum Quis esse est obcaecati dignissimos odit
        Dolorem id sunt maiores fugiat reprehenderit A quasi suscipit deleniti
        exercitationem voluptatum?
      </p>
      <p>
        Elit provident ratione explicabo quam quisquam unde! Dignissimos
        doloribus assumenda magnam esse eius Quas cupiditate sunt ea vel sequi
        placeat? Dicta harum optio modi cum explicabo, assumenda quia.
        Consequatur fuga.
      </p>
    </div>
  );
};

export default UserOutput;
