import React from "react";
import "./bar.scss";


const color = [
  "#7E0202",
  "#06895A",
  "#0097AC",
  "#E48C08",
  "#B3A20A",
  "#8F0056"
];


export const Bar = ({ title }) => {
  return (
    <div className="ui-bar card card-2" style={{
      backgroundColor: color[Math.floor(Math.random() * color.length)]
    }}>{ title }</div>
  );
}
