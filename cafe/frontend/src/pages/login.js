import React, { useState, useEffect } from 'react';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username.trim(),
          password: formData.password.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Store user info and token
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.user._id);
        localStorage.setItem('username', data.user.username);

        setMessage(`✅ Welcome back, ${data.user.username}!`);
        setSuccess(true);
        setFormData({ username: '', password: '' });

        // ✅ Redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        setMessage(`❌ ${data.error}`);
        setSuccess(false);
      }
    } catch (err) {
      setMessage(`❌ ${err.message}`);
      setSuccess(false);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="login-container">
      {message && (
        <div className={`login-popup ${success ? 'success' : 'error'}`}>
          {message}
        </div>
      )}

      <h2 className="login-title">Welcome Back</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

