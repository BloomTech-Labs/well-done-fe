import React from "react";
import { css } from "emotion";

export default function BlankCard({ children, style }) {
  return (
    <div
      className={css({
        backgroundColor: "white",
        padding: "10px 20px",
        color: "black",
        borderRadius: 5,
        ...style
      })}
    >
      {children}
    </div>
  );
}
