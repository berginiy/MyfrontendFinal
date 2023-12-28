import { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../App.jsx';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useContext(UserContext);

  function setInputUsername(event) {
    setUsername(event.target.value);
  }

  function setInputPassword(event) {
    setPassword(event.target.value);
  }

  function sendForm(event) {
    event.preventDefault();

    axios.post('http://127.0.0.1:8000/api/v1/auth/login/', {
      username: username,
      password: password,
    })
      .then(res => {
        const { access, refresh } = res.data;
        console.log('Authentication successful:', res);

        localStorage.setItem('access_token', access);
        localStorage.setItem('refresh_token', refresh);

        setUser(true);
      })
      .catch(error => {
        if (error.response) {
          console.error('Authentication failed. Server responded with:', error.response.data);
        } else if (error.request) {
          console.error('No response received from the server. Is the server running?');
        } else {
          console.error('Error setting up the request:', error.message);
        }
      });

  }

  return (
    <div className="body_form">
      <form onSubmit={sendForm} action="" method="post">
        <h2>Login</h2>
        <label htmlFor="username">Username:</label>
        <input onChange={setInputUsername} type="text" name="username" placeholder="Enter your username" />
        <label htmlFor="password">Password:</label>
        <input onChange={setInputPassword} type="password" name="password" placeholder="Enter your password" />
        <button className="form" type="submit"><Link className='form_link' to='/'>SignIn</Link></button>
        <button className="form_red" type="submit"><Link className='form_link' to='/'>Back</Link></button>
      </form>
    </div> 
  );
}
