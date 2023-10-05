import React from "react";

function ErrorScreen() {
  return (
    <div
      style={{
        paddingTop: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        textAlign: "center",
        fontFamily: "Cinzel",
        fontSize: "2em",
        textShadow: "var(--textShadowOpacity)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>We have some problems</h1>
        <h2>Please come back later</h2>
      </div>
    </div>
  );
}

export default ErrorScreen;
