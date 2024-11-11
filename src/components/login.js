import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage,setLoginMessage]=useState('')
  const navigate = useNavigate() ;

  

  const userLogin = () => {
    if (email === 'ramkumar04@gmail.com' && password === 'ram2004') {
      toast.success('Welcome To Ram Cart');
      navigate('/home');
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

    <div className="d-flex justify-content-center align-items-center vh-100  loginform" style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2016/10/10/09/00/spectacular-room-1727890_1280.jpg)"}}>
      <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button onClick={userLogin} type="submit" className="btn btn-primary w-100">Login</button>
          {loginMessage &&<p>{loginMessage}</p>}
        </form>
        <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    navigate('/home')
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
