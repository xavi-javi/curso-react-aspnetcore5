import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let texto = "";

  const subtitulo = "Este es un subtitulo";

  const duplicar = (valor: number) => valor * 2;

  const imagenURL =
    "https://coder.clothing/images/stories/virtuemart/product/reactjs-logo-sticker.jpg";

    const manejarClick = () => {
      console.log('click');
    };

    const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
      console.log(e.currentTarget.value);
      texto = e.currentTarget.value;
    };

  return (
    <>
      <h1>Hola Mundo!</h1>
      <button onClick={manejarClick}>Click evento</button>      
      <input type="text" onKeyUp={manejarKeyUp} />
      <div>
        El texto ingresado es: {texto}
      </div>
      <h3>{subtitulo.toUpperCase()}</h3>
      <h4>El doble de 3 es {duplicar(3)}</h4>
      <img alt="Logo React" src={imagenURL}></img>
      <div>
        <input type="checkbox" checked={true} /> Este es un checkbox
      </div>
    </>
  );
}

export default App;
