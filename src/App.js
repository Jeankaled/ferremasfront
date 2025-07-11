import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import ListaProductos from './components/ListaProductos';
import Encabezado from './components/Encabezado';
import Home from './components/Home';
import Login from './components/Login';
import Carrito from './components/Carrito';
import PrivateRoute from './components/PrivateRoute';
import registro from './components/Registro';

import './styleInicio.css'; // Asegúrate de que la ruta sea correcta



function App() {

  const [filtro, setFiltro] = useState('');


  return (
   <BrowserRouter>
     <Encabezado onSearch={setFiltro} />
     <Routes path="/dashboard"element={<PrivateRoute> </PrivateRoute>}>
       <Route path="/" element={<Navigate to="/home" replace />} />
       <Route path="/home"  element={<Home />} />
       <Route path="/productos" element={<ListaProductos filtro={filtro} />}/>
       <Route path="/login"  element={<Login />} />
       <Route path="/carrito"   element={<Carrito/>} />
        <Route path="/registro" element={<registro />} />
       <Route path="*" element={<Navigate to="/home" replace />} />
     </Routes>
    </BrowserRouter>

    
  );
}

export default App;
