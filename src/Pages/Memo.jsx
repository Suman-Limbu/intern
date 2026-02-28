import { useState, useMemo } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

const expensiveResult= slowCalculation(count)

  return (
    <>
      <h1>{expensiveResult}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setDark(!dark)}>Theme</button>
    </>
  );
}

function slowCalculation(num) {
  console.log("Calculating...");
  for (let i = 0; i < 1e9; i++) {}
  return num * 2;
}

export default Memo;