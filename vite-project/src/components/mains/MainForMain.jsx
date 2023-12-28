import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { useContext } from 'react';

export default function MainForMain() {
  const [user, setUser] = useContext(UserContext)
  return(
    <main className="main_container">
      <section className='bird'>
        <div className='section_left'>
        <div className="section_text">
          <h2>D&D game with ChatGPT</h2>
          <p>this is text about such a good our game that you want to give all your money and maybe give 100 point you know</p>
        </div>
        <div className="btn">
          <Link className='link' to='/game'>Start Game</Link>
        </div>
        </div>
        {!user ? (
        <>
        </>) : (
          <div className="section_right">
            <div className='game_div'></div>
            <div className='game_div'></div>
            <div className='game_div'></div>
          </div>
        )}
      </section>
    </main>
  )
}