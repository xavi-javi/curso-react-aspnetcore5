import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppCSS from "./App.module.css";

function App() {
  const subtitulo = "Este es un subtitulo";

  const duplicar = (valor: number) => valor * 2;

  const imagenURL =
    "https://coder.clothing/images/stories/virtuemart/product/reactjs-logo-sticker.jpg";

  const cuadradoAzul = {
    backgroundColor: "blue",
    width: "50px",
    height: "50px",
    marginLeft: "1rem",
  };

  return (
    <>
      <div className="cuadrado-rojo"></div>
      <div
        style={{
          backgroundColor: "green",
          width: "50px",
          height: "50px",
          marginLeft: "1rem",
        }}
      ></div>
      <div style={cuadradoAzul}></div>
      <h1>Hola Mundo!</h1>
      <h3>{subtitulo.toUpperCase()}</h3>
      <h4>El doble de 3 es {duplicar(3)}</h4>
      <h4 className="color">Color desde index.css</h4>
      <h4 className={AppCSS.color}>Color desde App.module.css</h4>
      <img alt="Logo React" src={imagenURL}></img>
      <div>
        <input type="checkbox" checked={true} /> Este es un checkbox
      </div>
    </>
  );
}

export default App;
