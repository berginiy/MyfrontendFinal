import { useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../../App.jsx'

export default function SignUp() {
  <input type="text" name="username" placeholder="make your username" />
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirm, setPasswordConfirm] = useState()
  const [email, setEmail] = useState()
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

  function sendForm(event) {
    event.preventDefault();

    axios.post(`http://127.0.0.1:8000/api/v1/auth/register/`, {
      username: username,
      email: email,
      password: password,
      confirm_password: passwordConfirm,
      first_name: 'Artur',
      last_name: 'Davletshin'
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
        <label htmlFor="username">username:</label>
        <input onChange={setInputUsername} type="text" name="username" placeholder="make your username" />
        <label htmlFor="email">email:</label>
        <input onChange={setInputEmail} type="email" name="email" placeholder="make your email" />
        <label htmlFor="password">password:</label>
        <input onChange={setInputPassword} type="password" name="password" placeholder="make your password" />
        <label htmlFor="password_again">password:</label>
        <input onChange={setInputPasswordConfirm} type="password" name="password_again" placeholder="write your password again" />
        <button className='form' type="submit">SignUp</button>
      </form>
    </div>
  )
}