import React from "react";
import logo from './images/logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Profesor from "./components/interfazPerfiles/Profesor";
import Sidebar from "./components/main/sideBar"; 
import Navbar from "./components/main/navBar";

function App() {
  return (
      <div >
            <div>
                  <Navbar/>
            </div>
            
            <div style={{display: "flex"}}>
                  
                  <Sidebar width={300} height={"100vh"}>
                        <h1>Organigramas</h1>
                        <h1>Profesores</h1>
                        <h1>Alumnos</h1>
                        <h1>Accesos</h1>
                  </Sidebar>
            
                  <div style={{display: "inline"}}>
                        <img src={logo} alt="Logo de la institución" width={100}/>
                        <h1>I.E.P Latino</h1>
                  <div >
                        <h1>Gestión de Alumnos</h1>
                        <Profesor />
                  </div>
            </div>
            </div>
      </div>
  );
}

export default App;
