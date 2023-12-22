
export default function SignUp() {
  return(
    <div className="body_form">
      <form action="" method="post">
        <h2>Register</h2>
        <label htmlFor="username">username:</label>
        <input type="text" name="username" placeholder="make your username" />
        <label htmlFor="email">email:</label>
        <input type="email" name="email" placeholder="make your email" />
        <label htmlFor="password">password:</label>
        <input type="text" name="password" placeholder="make your password" />
        <label htmlFor="password_again">password:</label>
        <input type="text" name="password_again" placeholder="write your password again" />
        <button className='form' type="submit">SignUp</button>
      </form>
    </div>
  )
}