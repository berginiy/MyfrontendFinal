import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { useContext } from 'react';

export default function HeaderNew() {
  const [user, setUser] = useContext(UserContext)

  return(
    <header>
      <div className="header-title">
        <h1>Нейросеть</h1>
      </div>
      <div className='header-inner'>
        <div>
          {/* <img src="" alt="" /> */}
        </div>
        <nav>
          {!user ? (
            <><Link className='link' to='/login'>SignIn</Link><Link className='link' to='/register'>SignUp</Link></>
          ) : (
            <><Link className='link' to='/logout'>LogOut</Link><Link className='link' to='/home'>Home</Link></>
          )}
          
        </nav>
      </div>
    </header>
  )
}