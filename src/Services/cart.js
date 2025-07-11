// services/cart.js
import axios from 'axios';


const api = axios.create({ 
    baseURL: 'http://localhost:8000',
    withCredentials: true, 
});


export const addToCart = (producto_id, cantidad = 1) =>
  api.post('/cart/add/', { producto_id, cantidad });

export const removeFromCart = (producto_id) =>
  api.post('/cart/remove/', { producto_id });

export const getCart = () =>
  api.get('/cart/');


export const checkout = () =>
  api.post('/cart/checkout/').then(res => {
    window.location.href = res.data.url;
  });





export default api