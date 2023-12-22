import { Link } from 'react-router-dom';

export default function HeaderNew() {
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
          <Link className='link' to='/login'>SignIn</Link>
          <Link className='link' to='/register'>SignUp</Link>
        </nav>
      </div>
    </header>
  )
}