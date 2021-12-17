import React from "react";
import { Routes, Route } from 'react-router'; 
import Ordenes from './components/paginas/Ordenes'; 
import Usuarios from './components/paginas/Usuarios'; 
import Productos from './components/paginas/Productos';


function App(){
  return (

    <div >
      <h1>hola mundo domingo</h1>
      <Routes>                 
              <Route path="/" element={<Ordenes />  } />                 
              <Route path="/usuarios" element={<Usuarios />  } />                 
              <Route path="/productos" element={<Productos />  } />                              
      </Routes>
    </div>


  );

}

export default App;
