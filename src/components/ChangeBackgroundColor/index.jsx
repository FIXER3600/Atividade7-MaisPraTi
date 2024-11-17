import React, { useState } from "react";
import './style.css'
export default function ChangeBackgroundColor() {
	let [backgroundColor,setBackgroundColor] = useState('white')

  function changeColor() {
    let newColor='#' + parseInt((Math.random() * 0xFFFFFF))
    setBackgroundColor(newColor)
  }

  return (
  <div className="change-color-body" style={{"background-color":backgroundColor}}>
    <button  onClick={changeColor}>Change</button>
    </div>);
}
