import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MostrarTexto from "./MostrarTexto";
import ProyectarContenido from "./ProyectarContenido";
import ProyectarContenido2 from "./ProyectarContenido2";
import EjemploReloj from "./EjemploReloj";
import ContenidoDinamico from "./ContenidoDinamico";
import FormularioTexto from "./FormularioTexto";
import EjemploUseEffect from "./EjemploUseEffect";
import ValorContext from "./ValorContext";
import Abuelo from "./Abuelo";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const [texto, setTexto] = useState("");
  const [checked, setChecked] = useState(true);

  const subtitulo = "Este es un subtitulo";

  const duplicar = (valor: number) => valor * 2;

  const imagenURL =
    "https://coder.clothing/images/stories/virtuemart/product/reactjs-logo-sticker.jpg";

  const manejarClick = () => {
    console.log("click");
  };

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setTexto(e.currentTarget.value);
  };

  const calificaciones = [
    {nombre: 'Felipe', calificacion: 75},
    {nombre: 'Claudia', calificacion: -1},
    {nombre: 'Roberto', calificacion: 95},
  ];

  return (
    <>
      <h1>Hola Mundo!</h1>

      {calificaciones.map(cal => 
        <ErrorBoundary key={cal.nombre} errorUI={<h3>Hubo un error al mostrar la califación</h3>} >
          <ContenidoDinamico {...cal} />
        </ErrorBoundary>
       )}

      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <ValorContext.Provider value={texto}>
        <Abuelo />
      </ValorContext.Provider>

      <div>
        <input
          type="checkbox"
          onChange={(e) => setChecked(e.currentTarget.checked)}
          checked={checked}
        /> Mostrar componente "EjemploUseEffect"
      </div>

      {checked ? <EjemploUseEffect /> : null}
      

      <ProyectarContenido2
        parteSuperior={<span>Esta es la parte de arriba</span>}
        parteIntermedia={<EjemploReloj/>}
        parteInferior={<div style={{backgroundColor: 'red', width: '50px', height: '50px', marginLeft: '1rem'}}></div>}
      />
      <ProyectarContenido>
        <>
          <span>Proyectando contenido</span>
        </>
      </ProyectarContenido>
      <button onClick={manejarClick}>Click evento</button>
      <FormularioTexto manejarKeyUp={manejarKeyUp} />
      <MostrarTexto texto={texto} />
      <h3>{subtitulo.toUpperCase()}</h3>
      <h4>El doble de 3 es {duplicar(3)}</h4>
      <img alt="Logo React" src={imagenURL}></img>
      <div>
        <input
          type="checkbox"
          onChange={(e) => setChecked(e.currentTarget.checked)}
          checked={checked}
        />{" "}
        Este es un checkbox
      </div>
    </>
  );
}

export default App;
