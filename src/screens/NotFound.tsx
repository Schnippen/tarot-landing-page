import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  }, []);

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
      <div>
        <h1>Page Not Found</h1>
      </div>
    </div>
  );
}

export default NotFound;
