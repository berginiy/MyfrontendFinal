import { Link } from 'react-router-dom';

export default function Button() {
  return(
    <div>
      <button>
        <Link className='link' to='/game'>StartGame</Link>
      </button>
    </div>
  )
}