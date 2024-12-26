import React, { useState } from 'react';
import { FacebookLogo, GoogleLogo } from 'phosphor-react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <div className='animation'>
      <video autoPlay loop muted src='https://cdn.dribbble.com/users/721278/screenshots/15588880/media/4550552adbb9c60edfa0c93ed493f063.mp4'>
      </video>
      </div>

      <section className='container'>
        <div className='login-page'>
          <h1>Sign in to Osmium </h1>
          <div className="social-login">
            <button className="google-login">Google
              <GoogleLogo size={24} weight="bold" />
            </button>
            <button className="facebook-login">Facebook
              <FacebookLogo size={24} weight="bold" />
            </button>
          </div>
          <h6>or sign with email</h6>

          <div className="form">
            <form onSubmit={handleSubmit}>
              <input id='email'
                type='email'
                placeholder='email or username'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <br />
              <input id='password'
                type='password'
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <br />
              <button type='submit'>Log in</button> <br />
            </form>

            <a href='#'>Forgot password?</a>
            <a href='#'>Create an account</a>

          </div>
        </div>
      </section>
    </>
  );
}

export default Login;