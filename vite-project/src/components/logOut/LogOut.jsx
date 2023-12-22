
export default function LogOut() {
  return(
    <div className="body_form">
      <form action="" method="get">
        <h2>Logout</h2>
        <label htmlFor="logOut">Are you sure?</label>
        <button className='form_red' type="submit" name="logOut">Yes</button>
        <button className='form' type="submit" name="logOut">No</button>
      </form>
    </div>
  )
}