import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Validation from '../../utils/Validation';
import { login } from '../../store/Authentication';

const LoginForm = () => {
  const validation = new Validation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => { 
    e.preventDefault();
    if(!validation.isEmail(email)) setEmailError(true);
    if(validation.isEmpty(password)) setPasswordError(true);
    console.log('Login:', email, password);

    if(!emailError && !passwordError){
      dispatch(login({email, password}, navigate));
      setEmail('');
      setPassword('');
      setEmailError(false);
      setPasswordError(false);
    } else {
      alert('Please enter valid fields');
    }
    
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-form">
      <h2>{'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">{'Login'}</button>
      </form>
      <p>
        {"Don't have an account?"}
        <button onClick={() => navigate('/sign-up')}>
          {'Sign up'}
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
