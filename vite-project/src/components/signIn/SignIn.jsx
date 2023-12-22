
export default function SignIn() {
  return(
    <div className="body_form">
      <form action="" method="post">
        <h2>Login</h2>
        <label htmlFor="username">username:</label>
        <input type="text" name='username' placeholder="write your username" required/>
        <label htmlFor="password">password:</label>
        <input type="text" name='password' placeholder="write your password" required/>
        <button className='form' type="submit">SignIn</button>
      </form>
    </div>
  )
}
