import { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../App.jsx';
import { Link } from 'react-router-dom';


export default function SignUp() {
  <input type="text" name="username" placeholder="make your username" />
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirm, setPasswordConfirm] = useState()
  const [email, setEmail] = useState()
  const [first_name, setFirstname] = useState()
  const [last_name, setLastname] = useState()
  const [user, setUser] = useContext(UserContext)

  function setInputPassword(event) {
    setPassword(event.target.value)
  }

  function setInputPasswordConfirm(event) {
    setPasswordConfirm(event.target.value)
  }

  function setInputEmail(event) {
    setEmail(event.target.value)
  }

  function setInputUsername(event) {
    setUsername(event.target.value)
  }

  function setInputFirstname(event) {
    setFirstname(event.target.value)
  }

  function setInputLastname(event) {
    setLastname(event.target.value)
  }

  function sendForm(event) {
    event.preventDefault();

    axios.post(`http://127.0.0.1:8000/api/v1/auth/register/`, {
      username: username,
      email: email,
      password: password,
      confirm_password: passwordConfirm,
      first_name: first_name,
      last_name: last_name
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
        setUser(true)
      })
  }

  return (
    <div className="body_form">
      <form onSubmit={sendForm} action="" method="post">
        <h2>Register</h2>
        <label htmlFor="first_name">first name:</label>
        <input onChange={setInputFirstname} type="text" name="first_name" placeholder="write your first name" />
        <label htmlFor="last_name">last name:</label>
        <input onChange={setInputLastname} type="text" name="last_name" placeholder="write your last name" />
        <label htmlFor="username">username:</label>
        <input onChange={setInputUsername} type="text" name="username" placeholder="make your username" />
        <label htmlFor="email">email:</label>
        <input onChange={setInputEmail} type="email" name="email" placeholder="make your email" />
        <label htmlFor="password">password:</label>
        <input onChange={setInputPassword} type="password" name="password" placeholder="make your password" />
        <label htmlFor="password_again">password:</label>
        <input onChange={setInputPasswordConfirm} type="password" name="password_again" placeholder="write your password again" />
        <button className='form' type="submit"><Link className='form_link' to='/'>SignUp</Link></button>
        <button className="form_red" type="submit"><Link className='form_link' to='/'>Back</Link></button>
      </form>
    </div>
  )
}