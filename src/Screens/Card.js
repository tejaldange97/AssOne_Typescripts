import React from "react";

export const Card = (props) => {
  return (
    <div className="row" style={{ marginTop: 10 }}>
      <div className="col-md-6 col-lg-6 col-xl-6">
        <text style={{ fontWeight: "bold", fontSize: 20 }}>{props.name}</text>
      </div>
      <div className="col-md-2 col-lg-2 col-xl-2">
        <text style={{ fontSize: 20 }}>{props.value}</text>
      </div>
      <div className="col-md-4 col-lg-4 col-xl-4" />
    </div>
  );
};
