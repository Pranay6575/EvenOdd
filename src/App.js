import "./styles.css";
// import render from "./ConditionalRender";
import React, { useState } from "react";

export default function App() {
  let [num, setNum] = useState(0);
  // let para;
  // if (num % 2) {
  //   para = <p>Odd</p>;
  // } else {
  //   para = <p>Even</p>;
  // }

  return (
    <>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <p>{num % 2 ? "Odd" : "Even"}</p>;
    </>
  );
}
