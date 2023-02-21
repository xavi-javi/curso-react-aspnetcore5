import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const subtitulo = "Este es un subtitulo";

  const duplicar = ( valor: number ) => valor * 2;

  const imagenURL = "https://blog.digital-pineapple.com.mx/wp-content/uploads/2021/01/0_oZLL-N4dGNlBe4Oh.png";

  return (
    <div>
      <h1>Hola Mundo!</h1>
      <h3>{subtitulo.toUpperCase()}</h3>
      <h4>El doble de 3 es {duplicar(3)}</h4>
      <img alt="Logo React" src={imagenURL}></img>
      <div>
        <input type="checkbox" checked={true}/> Este es un checkbox
      </div>
    </div>
  );
}

export default App;
