import "./styles.css";
import React, { useEffect } from "react";

export default function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const checkSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <div className="App">
      <h1>Window size</h1>
      <h2>
        {width} pixels x {height} pixels
      </h2>
    </div>
  );
}
