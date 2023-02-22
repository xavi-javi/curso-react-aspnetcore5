import React, { useEffect, useState } from "react";
import "./App.css";
import PeliculaIndividual from "./peliculas/PeliculaIndividual";
import { pelicula } from "./peliculas/peliculas.model";

function App() {

  const peliculaPrueba : pelicula = {
    id: 1,
    titulo: 'Spider-Man: Far from Home',
    poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
  };

  return (
    <>
      <PeliculaIndividual pelicula={peliculaPrueba} />
    </>
  );
}

export default App;
