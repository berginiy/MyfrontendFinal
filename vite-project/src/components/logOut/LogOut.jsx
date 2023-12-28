import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App.jsx';
 
export default function LogOut() {
  const [user, setUser] = useContext(UserContext);

  function setUserFalse(event) {
    setUser(false)
  }

  function setUserTrue(event) {
    setUser(true)
  }

  return(
    <div className="body_form">
      <form action="" method="get">
        <h2>Logout</h2>
        <label htmlFor="logOut">Are you sure?</label>
        <button onClick={setUserFalse} className='form_red' type="submit" name="logOut"><Link className='form_link' to='/'>Yes</Link></button>
        <button onClick={setUserTrue} className='form' type="submit" name="logOut"><Link className='form_link' to='/'>No</Link></button>
      </form>
    </div>
  )
}