import React from "react";
import "./bar.scss";

export const Bar = ({ title, color }) => {
  return (
    <div className="ui-bar card card-2" style={{
      backgroundColor: color
    }}>{ title }</div>
  );
}
