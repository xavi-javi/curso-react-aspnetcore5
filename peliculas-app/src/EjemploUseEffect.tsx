import { useEffect, useState } from "react";

function EjemploUseEffect() {
  const [clicks, setClicks] = useState(0);

  const [fecha, setFecha] = useState(new Date());

  useEffect(() => {
    console.log("useEffect del click");

    document.title = `${clicks} veces`;

    return () => {
      console.log("El componente se va a destruir");
    };
  }, [clicks]);
  // de esta forma este useEffect sólo se va a ejecutar cuando clicks cambie


  useEffect(() => {
    console.log("useEffect del interval");

    const intervalId = setInterval(() => {
      setFecha(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  });



  useEffect(() => {
    console.log("voy a ejecutarme una vez");
  },[])
  // de esta forma este useEffect sólo se va a actualizar 1 vez
  // HAAAAA pero cuando el componente vuelve a aparecer si se ejecuta de nuevo
  // lo podemos ver con el onInitialize del blazor

  return (
    <>
      <button type="button" onClick={() => setClicks(clicks + 1)}>
        Me has clickeado {clicks} veces
      </button>
      <div>{fecha.toString()}</div>
    </>
  );
}

export default EjemploUseEffect;
