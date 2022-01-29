import React from "react";
function Heading() {
  const date = new Date();
  const currentTime = date.getHours();

  const customStyle = {
    color: ""
  };

  if (currentTime < 12) {
    customStyle.color = "red";
  } else if (currentTime < 18) {
    customStyle.color = "green";
  } else {
    customStyle.color = "blue";
  }

  let greeting;

  if (currentTime < 12) {
    greeting = "Good Morning";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Night";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
