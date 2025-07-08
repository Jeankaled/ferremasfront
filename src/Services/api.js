import axios from 'axios';



const api = axios.create({baseURL: ''});

export function fetchProductos() {
    return api.get('/productos/');
}

export function createProducto(data) {
    return api.post('/productos/', data);
}


