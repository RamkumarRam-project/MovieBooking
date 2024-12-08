import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const LoginForm = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const userLogin = () => {
    if (email === 'ramkumar04@gmail.com' && password === 'ram2004') {
      toast.success('Welcome to RAM CINEMAS!');
      setIsLoggedIn(true); // Update the login state
      navigate('/'); // Redirect to the home page
    } else {
      toast.error('Incorrect Password');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin();
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   // console.log('Email:', email);
  //   // console.log('Password:', password);
  // };

  return (

   <>
    <div className="d-flex justify-content-center align-items-center vh-100  loginform">
      <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
      
        <h2 className="text-center mb-4">RAM CINEMAS</h2>
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address:</label>
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
            <label htmlFor="password" className="form-label">Password:</label>
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
          <button onClick={userLogin} type="submit" className="btn btn-primary mb-3 w-100">Login</button>
          
        </form>
        <GoogleLogin 
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    navigate('/')
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
        <p className="text-center mt-3">
          <a href="#" className="text-decoration-none">Forgot password?</a>
        </p>
      </div>
    </div>
    </>
  );
};

export default LoginForm;
