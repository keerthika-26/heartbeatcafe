import React, { useState, useEffect } from 'react';
import './register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    Firstname: '',
    secondname: '',
    email: '',
    username: '',
    password: '',
    phonenumber: '',
    adharnumber: '',
    address: '',
    role: 'customer',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateUserId = (firstname) => `${firstname}${Math.floor(Math.random() * 90 + 10)}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = generateUserId(formData.Firstname);

    try {
      const res = await fetch('http://localhost:5000/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, userId }),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage('✅ Registered Successfully!');
        // Save the user data to localStorage
        localStorage.setItem('user', JSON.stringify({ ...formData, userId }));
        // Clear form
        setFormData({
          Firstname: '',
          secondname: '',
          email: '',
          username: '',
          password: '',
          phonenumber: '',
          adharnumber: '',
          address: '',
          role: 'customer',
        });
      } else {
        setMessage(`❌ ${result.error}`);
      }
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    }
  };

  useEffect(() => {
    if (message) setTimeout(() => setMessage(''), 5000);
  }, [message]);

  return (
    <div className="register-container">
      {message && <p className={message.startsWith('✅') ? 'success' : 'error'}>{message}</p>}

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) =>
          key !== 'role' ? (
            <input
              key={key}
              name={key}
              type={key === 'password' ? 'password' : 'text'}
              placeholder={key}
              value={value}
              onChange={handleChange}
              required
            />
          ) : (
            <select key={key} name="role" value={value} onChange={handleChange}>
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
            </select>
          )
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
