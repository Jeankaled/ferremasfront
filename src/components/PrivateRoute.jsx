// src/components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  return localStorage.getItem('accessToken')
    ? children
    : <Navigate to="/login" />;
}
