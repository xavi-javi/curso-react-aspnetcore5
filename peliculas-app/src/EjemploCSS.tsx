import AppCSS from "./App.module.css";

export default function EjemploCSS() {
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
      <h4 className="color">Color desde index.css</h4>
      <h4 className={AppCSS.color}>Color desde App.module.css</h4>
    </>
  );
}
