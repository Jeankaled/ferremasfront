import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import ListaProductos from './components/ListaProductos';
import Encabezado from './components/Encabezado';
import Home from './components/Home';
import Login from './components/Login';



function App() {

  const [filtro, setFiltro] = useState('');


  return (
   <BrowserRouter>
     <Encabezado onSearch={setFiltro} />
     <Routes>
       <Route path="/" element={<Navigate to="/home" replace />} />
       <Route path="/home"  element={<Home />} />
       <Route path="/productos" element={<ListaProductos filtro={filtro} />}/>
       <Route path="/login"  element={<Login />} />
       <Route path="*" element={<Navigate to="/home" replace />} />
     </Routes>
    </BrowserRouter>

    
  );
}

export default App;
