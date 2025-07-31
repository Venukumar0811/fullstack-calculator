import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [op, setOp] = useState("+");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleCalculate = async () => {
    try {
      const response = await axios.get("http://localhost:5000/calc", {
        params: {
          n1: num1,
          n2: num2,
          op: op
        },
      });
      setResult(response.data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to connect to backend");
      setResult("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Calculator (Using Backend)</h2>

      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />

      <select value={op} onChange={(e) => setOp(e.target.value)}>
        <option value="+">Addition (+)</option>
        <option value="-">Subtraction (-)</option>
        <option value="*">Multiplication (*)</option>
        <option value="/">Division (/)</option>
      </select>
      <br /><br />

      <button onClick={handleCalculate}>Calculate</button>

      {result && <h3 style={{ marginTop: "20px" }}>{result}</h3>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
