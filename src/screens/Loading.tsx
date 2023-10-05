import React from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { useState, useEffect } from "react";
import { a, useSpring } from "react-spring";

function Loading() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (time === "...") {
        setTime("");
      } else {
        setTime((time) => time + ".");
      }
    }, 930);
    return () => {
      clearInterval(interval);
    };
  }, [time]);
  const loadingText = "Loading";

  const { transform } = useSpring({
    to: { transform: "rotate(360deg)" },
    from: { transform: "rotate(0deg)" }, // Start at 0 degrees
    config: { duration: 1000 }, // Animation duration in milliseconds
    loop: true,
  });

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "200px",
      }}
    >
      <div
        style={{
          width: "250px",
          height: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          userSelect: "none",
        }}
      >
        <a.div
          style={{
            transform,
          }}
        >
          <AiOutlineLoading
            style={{
              color: "var(--textShadow)",
              width: "150px",
              height: "150px",
            }}
          />
        </a.div>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "150px",
            position: "relative",
            fontFamily: "Cinzel",
            fontWeight: "bold",
          }}
        >
          {loadingText}
          <div style={{ position: "absolute", left: "165px" }}>{time}</div>
        </h1>
      </div>
    </div>
  );
}

export default Loading;

/*           {
            loadingText.split("").map((char, index) => (
              <span
                key={index}
                style={{
                  color: "var(--textShadow)",
                  animationDelay: `calc(.1s * ${index + 1})`,
                }}
              >
                {char}
              </span>
            ));
          } */
