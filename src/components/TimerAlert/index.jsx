import React, { useState, useEffect } from "react";
import './style.css'

function TimerAlert() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);  
  const [initialTime, setInitialTime] = useState(0);

  const handlePause = () => setIsRunning(false);
  const handleResume = () => setIsRunning(true);

  const handleSeconds = (e) => {
    const inputValue = e.target.value;
    setSeconds(inputValue);
    setInitialTime(inputValue); 
  };

  const handleReset = () => {
    setSeconds(initialTime);
    setIsRunning(false); 
  };

  useEffect(() => {
    let interval;
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1); 
      }, 1000);
    }

    if (seconds === 0) {
      clearInterval(interval); 
      if (isRunning) {
        alert("Tempo acabou!");
      }
      setIsRunning(false); 
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }} className="timer-body">
      <h1>Temporizador</h1>
      <input
        type="number"
        placeholder="Digite os segundos..."
        onChange={handleSeconds}
      />
      <button onClick={() => setIsRunning(true)}>Começar</button>
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
    </div>
  );
}

export default TimerAlert;
