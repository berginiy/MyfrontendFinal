import { useState } from 'react';
import axios from 'axios';

export default function Form() {
  const [gameUserName, setGameUserName] = useState()
  const [gameUserRole, setGameUserRole] = useState()

  function setInputGameUserName(event) {
    setGameUserName(event.target.value)
  }

  function setInputGameUserRole(event) {
    setGameUserRole(event.target.value)
  }

  function sendForm(event) {
    event.preventDefault();

    axios.post(`http://127.0.0.1:8000/api/v1/chatgpt/story`, {
      name: gameUserName,
      role: gameUserRole,
      health: 100,
      hunger: 100,
      thirst: 100,
      user: 25
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  return(
    <div className="body_form">
      <form onSubmit={sendForm} action="" method="post">
        <h2>Story</h2>
        <label htmlFor="name">name:</label>
        <input onChange={setInputGameUserName} type="text" name='name' placeholder="write your personal name for the game" />
        <label htmlFor="role">role:</label>
        <input onChange={setInputGameUserRole} type="text" name='role' placeholder="write your personal role for the game" />
        <button className='form_blue' type="button">HELL YEAH</button>
      </form>
    </div>
  )
}