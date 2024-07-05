import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [c, setC] = useState(0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setC((c) => c + 1)}>add</button>
      {c}
      <Test c={c} />
    </div>
  );
}

function Test({ c }) {
  if (c < 3) return <>小于. 3</>;
  const [a, setA] = useState(0);
  useEffect(() => {
    console.log("大于 3..");
  }, []);
  return <>大于 3.。。。</>;
  // return <TestWithEffect />
}

function TestWithEffect() {
  useEffect(() => {
    console.log("大于 3..");
  }, []);
  return <>大于 3.。。。</>;
}