import React, { useState } from 'react';
import './Signup.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Validation from '../../utils/Validation';
import { signup } from '../../store/Authentication';

const LoginForm = () => {
  const validation = new Validation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validation.isEmpty(name)) setNameError(true);
    if(!validation.isEmail(email)) setEmailError(true);
    if(validation.isEmpty(password)) setPasswordError(true);
    console.log('Signup:', email, password, name);

    if(!nameError && !emailError && !passwordError){
      dispatch(signup({email, password, name}, navigate));
      setEmail('');
      setPassword('');
      setName('');
      setNameError(false);
      setEmailError(false);
      setPasswordError(false);
    } else {
      alert('Please enter valid fields');
    }
    
  };

  return (
    <div className="login-form">
      <h2>{'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name='name'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <label>Email:</label>
        <input
          name='email'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <input
          name='password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">{'Sign Up'}</button>
      </form>
      <p>
        {'Already have an account?'}
        <button onClick={() => navigate('/login')}>
          {'Login'}
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
