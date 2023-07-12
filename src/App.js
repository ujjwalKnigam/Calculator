import React, { useState } from "react";

function App() {
  const pi = 3.14159;
  const [calc,setCalc] = useState("")
  const [result,setResult] = useState("")
  const ops = ["+","-","*","/","."]
  const handleOperators = (operator)=>{
    if ((ops.includes(operator) && calc==="") || (ops.includes(operator) && ops.includes(calc.slice(-1))))
    {
      return;
    }
    setCalc(calc + operator)
  } 
  const handleDigits = (value) => {
    setCalc(calc + value)
  }
  const createDigits = ()=>{
    var digits = []
    for (let i=1;i<10;i++)
    {
      digits.push(<button key={i} onClick={()=>{handleDigits(i)}}>{i}</button>)
    }
    return digits;
  }
  const handleClearAll = ()=>{
    setCalc("")
    setResult("")
  }
  const handleAnswer = () => {
    setResult(eval(calc.toString()))
    setCalc("")
  }
  const handleDelete = () => {
    setCalc(calc.toString().slice(0,-1))
  }
  const handleNaturalLog = () => {
    setCalc(Math.log(calc))
  }
  const handleFactorial = () => {
    var fac = 1;
    for (let f = 1;f<=calc;f++)
    {
      fac = f*fac;
    }
    setCalc(fac)
  }
  const handleReciprocal = () => {
    setCalc((calc**(-1)))
  }
  const handleLog = () => {
    setCalc(Math.log10(calc))
  }
  const handleSine = () => {
    var radians = calc * pi * 0.0055
    setCalc(Math.sin(radians))
  }
  const handleCosine = () => {
    var radians = calc * pi * 0.0055
    setCalc(Math.cos(radians))
  }
  const handleTangent = () => {
    var radians = calc * pi * 0.0055
    setCalc(Math.tan(radians))
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>{result?result:(calc?calc:"0")}</span>
        </div>
        <div className="basic">
          <button onClick={handleClearAll}>AC</button>
          <button onClick={handleDelete}>DEL</button>
          <button onClick={handleAnswer}>ANS</button>
        </div>
        <div className="operators">
          <button onClick={()=>{handleOperators("+")}}>+</button>
          <button onClick={()=>{handleOperators("-")}}>-</button>
          <button onClick={()=>{handleOperators("*")}}>*</button>
          <button onClick={()=>{handleOperators("/")}}>/</button>
          <button onClick={handleReciprocal}>1/x</button>
          <button onClick={handleFactorial}>x!</button>
          <button onClick={handleLog}>lg(x)</button>
          <button onClick={handleNaturalLog}>ln(x)</button>
          <button onClick={handleSine}>sin(x)</button>
          <button onClick={handleCosine}>cos(x)</button>
          <button onClick={handleTangent}>tan(x)</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={()=>{handleDigits("0")}}>0</button>
          <button onClick={()=>{handleOperators(".")}}>.</button>
          <button onClick={()=>{handleDigits(pi)}}>π</button>
        </div>
      </div>
    </div>
  );
}

export default App;