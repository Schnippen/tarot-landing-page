import React from "react";

function Separator({ marginHeight = 40 }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: `${marginHeight}px 0`,
      }}
    >
      <div
        style={{
          height: "1px",
          backgroundColor: "#000",
          width: "90%",
        }}
      ></div>
    </div>
  );
}

export default Separator;
