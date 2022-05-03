import React from "react";
import { useState } from "react";

export default function Calculator() {
    const [value, calculation] = useState(0)

    function submite(e){
        e.preventDefault();
        let firstValue = parseInt(e.target.firstNo.value)
        let secondValue = parseInt(e.target.secondNo.value)
        let OptionValue = e.target.calculator.value;

        if(OptionValue=="add"){
            calculation(firstValue+secondValue);
        }
        else if(OptionValue=="substract"){
            calculation(firstValue-secondValue)
        }
        else if(OptionValue=="multiplay"){
            calculation(firstValue*secondValue)
        }
        else if(OptionValue=="divide"){
            calculation(firstValue/secondValue)
        }
    }
  return (
    <>
      <form onSubmit={submite}>
        <input type="number" name="firstNo" placeholder="enter first num" />{" "}
        <br />
        <input type="number" name="secondNo" placeholder="enter second num" />
        <label htmlFor="calculator">Select Operator</label>
        <select name="calculator" id="calculator">
          <option value="select">Select</option>
          <option value="add">Add</option>
          <option value="substract">Substract</option>
          <option value="multiplay">Multiplay</option>
          <option value="divide">Divide</option>
        </select>
          <button>Calculate</button>
      </form>
      <h1>Calculated value is {value}</h1>
    </>
  );
}
