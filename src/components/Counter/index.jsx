import React, { useState } from "react";
import './style.css'
export default function Counter() {
	let [number,setNumber]=useState(0);

	function incrementNumber() {
		setNumber(number+=1)
	}
	function decrementNumber() {
		if (number==0) {
			return
		}else{
			setNumber(number-=1)
		}
		
	}
  return (
  <div className="counter-body">
	<p>{number}</p>
	<div className="counter-buttons">
		<button onClick={incrementNumber}>Incrementar</button>
		<button onClick={decrementNumber}>Decrementar</button>
	</div>
  </div>
  )
}
