import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import IndiceGeneros from "./generos/IndicesGeneros";
import LandingPage from "./LandingPage";
import rutas from "./route-config";
import Menu from "./utils/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container py-3">
          <Switch>
            {rutas.map((ruta) =>
              <Route key={ruta.path} path={ruta.path} exact={ruta.exact} >
                <ruta.componente />
              </Route>
            )}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
