import React, { useState,useEffect } from "react";
import './style.css'
function Timer() {
	const [seconds,setSeconds]=useState(0)
	const [isRunning,setIsRunning]=useState(true)

	const handlePause=()=>setIsRunning(false)
	const handleResume=()=>setIsRunning(true)
	const handleReset = () => {
		setSeconds(0); // Reseta o contador para zero
		setIsRunning(false); // Pausa o contador
	      };
	useEffect(() => {
		let interval;
		if (isRunning) {
		  interval = setInterval(() => {
		    setSeconds((prevSeconds) => prevSeconds + 1); // Incrementa o contador
		  }, 1000);
		}
		return () => clearInterval(interval); // Limpa o intervalo ao desmontar ou pausar
	      }, [isRunning]);
  return (
		  <div style={{ textAlign: 'center', marginTop: '20px' }} className="timer-body">
      <h1>Temporizador</h1>
      <h2>{seconds} segundos</h2>
      <div>
        {isRunning ? (
          <button onClick={handlePause}>Pausar</button>
        ) : (
          <button onClick={handleResume}>Retomar</button>
        )}
        <button onClick={handleReset} style={{ marginLeft: '10px' }}>
          Reiniciar
        </button>
      </div>
    </div>)
}

export default Timer;
