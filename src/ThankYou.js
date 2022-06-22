import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const ThankYou = () => {
  const navigate = useHistory();

  useEffect(() => {
    setTimeout(() => {
      navigate.push("/");
    }, 5000);
  }, []);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      ThankYou
    </div>
  );
};
