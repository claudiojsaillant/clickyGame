import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="jumbotron">
      <h1 className="display-3">{props.title}</h1>
      <ul>
        <li>Score: {props.score}</li>
        <li>Best Score: {props.bestScore}</li>
      </ul>
    </div>
  );
}

export default Title;
