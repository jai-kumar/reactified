import { useEffect, useState } from "react";
import "./styles.css";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          // width: `${progress}%`,
          transform: `translateX(${animatedProgress - 100}%)`,
          color: `${animatedProgress < 5 ? "black" : "white"}`,
        }}
        role="progressbar"
        aria-valuenow={animatedProgress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {animatedProgress}%
      </div>
    </div>
  );
};

export default function App() {
  const bars = [5, 10, 30, 50, 70, 90, 100];
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {bars.map((b) => (
        <ProgressBar progress={b} key={b} />
      ))}
    </div>
  );
}
