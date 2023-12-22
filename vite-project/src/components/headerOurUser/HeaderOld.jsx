import { Link } from 'react-router-dom';

export default function HeaderOld() {
    return(
    <header>
      <div className="header-title">
        <h1>Нейросеть</h1>
      </div>
      <div className='header-inner'>
        <nav>
          <Link className='link' to='/logout'>LogOut</Link>
          <Link className='link' to='/home'>Home</Link>
        </nav>
      </div>
    </header>
  )
}
