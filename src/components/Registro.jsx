import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({
    username: '', email: '', first_name: '', last_name: '',
    password: '', password2: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register/', form);
      setMessage('Usuario creado correctamente. Ya puedes iniciar sesión.');
    } catch (err) {
      setMessage(err.response?.data || 'Error en el registro');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl mb-4">Crear Cuenta</h2>
      {message && <p className="mb-4">{JSON.stringify(message)}</p>}
      <form onSubmit={handleSubmit} className="space-y-3">
        {['username','email','first_name','last_name','password','password2'].map(field => (
          <div key={field}>
            <label>{field.replace('_',' ').toUpperCase()}</label>
            <input
              type={field.includes('password') ? 'password' : 'text'}
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}
