import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styleInicio.css';  
import '../styleEncabezado.css';

export default function Encabezado({onSearch}) {

    const [query, setQuery] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        onSearch(query.trim());
    }


    return (
        <div>
            <header>
                <div>
                    <h1>
                        <span>Ferremas</span><br />Distribuidora de  <span>productos de ferretería</span>
                    </h1>
                    <div className = "topbar">
                        <div>
                            <img src="/logoFerremas.png" alt="Ferremas logo" className ="logo" width={100}/>
                        </div> 
                        <nav>
                            <Link to="/Home" padding="10px">Home</Link>
                            <Link to="/productos" padding="10px">Productos</Link>
                            <Link to="/Login" padding="10px">Login</Link>
                            <Link to="/carrito" padding="10px">Carrito</Link> 
                            
                        </nav>
                        <form onSubmit={handleSubmit}>
                            <input type="text" 
                            name="buscar"
                            placeholder="Buscar producto" 
                            style={{width: "200px", padding: "5px"}}
                            onChange={(e) => setQuery(e.target.value)}
                            value={query}
                            />
                            <button className="btn">Buscar</button>
                        </form>

                       

                    </div>
                </div>
            </header>
        </div>
    );
}
