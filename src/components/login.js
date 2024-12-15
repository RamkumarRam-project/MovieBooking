import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Logo from './logo';

const LoginForm = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      toast.success('You are already logged in!');
      setIsLoggedIn(true);
      navigate('/'); // Redirect to the home page
    }
  }, [navigate, setIsLoggedIn]);

  const userLogin = () => {
    if (email === 'ramkumar04@gmail.com' && password === 'ram2004') {
      const user = { email }; // Only storing email in localStorage for simplicity
      localStorage.setItem('user', JSON.stringify(user)); // Save user to localStorage

      toast.success('Welcome to RAM CINEMAS!');
      setIsLoggedIn(true);
      navigate('/'); // Redirect to the home page
    } else {
      toast.error('Incorrect Email or Password');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin();
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginform">
      <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
        <Logo />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="ramkumar04@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="ram2004"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mb-3 w-100">
            Login
          </button>
        </form>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            // Store Google Auth in localStorage
            localStorage.setItem('user', JSON.stringify({ email: 'googleUser@gmail.com' }));
            toast.success('Welcome, Google User!');
            navigate('/');
          }}
          onError={() => {
            toast.error('Google Login Failed');
          }}
        />
        <p className="text-center mt-3">
          <a href="#" className="text-decoration-none">
            Forgot password?
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
