import React, { useState,useEffect } from "react";
import './style.css'
export default function ChangeBackgroundColor() {
	const [bgColor, setBgColor] = useState("#ffffff");

  // Função para gerar uma cor aleatória
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  };
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

    // Função chamada ao clicar no botão
    const handleChangeColor = () => {
      const newColor = generateRandomColor();
      setBgColor(newColor);
    };
  return (
  <div className="change-color-body" style={{"background-color":bgColor}}>
    <button   onClick={handleChangeColor}>Change</button>
    </div>);
}
