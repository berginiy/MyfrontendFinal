import { Link } from 'react-router-dom';

export default function Footer() {
  return(
    <footer className='menu'>
      <div className='menu_flex'>
        <div className="menu_title">
          <h3>Rule of the game:</h3>
          <ul>
            <li>0 HP heh you die</li>
            <li>you should play by your role</li>
            <li>dont try break site plz</li>
          </ul>
        </div>
        <div className='hub_list'>
          <ul className="social">
            <h2 className='hub_link_two'>Social</h2>
            <li className='hub_link_two'><Link className='link' to="https://www.facebook.com/dungeonsanddragons/">Facebook</Link></li>
            <li className='hub_link_two'><Link className='link' to="https://www.instagram.com/dndwizards/?hl=en">Instagram</Link></li>
            <li className='hub_link_two'><Link className='link' to="https://twitter.com/wizards_dnd">Twitter</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

