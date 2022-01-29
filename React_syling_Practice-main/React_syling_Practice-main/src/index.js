import React from "react";
import ReactDOM from "react-dom";

let d = new Date();
let hourss = d.getHours();
let msg = "";

const colour = {
  color: ""
};

if (hourss < 12) {
  msg = "Good Morning";
  colour.color = "red";
} else if (hourss < 18) {
  msg = "Good Afternoon";
  colour.color = "green";
} else if (hourss < 24) {
  msg = "Good Evening";
  colour.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={colour}>
    {msg}
  </h1>,
  document.getElementById("root")
);
