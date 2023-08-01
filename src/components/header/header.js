import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import header from '../header/header.scss'


function Header() {
  return (
        <span className='Header'>
          <img src ={logo} alt='logo kasa'className='logoKasa'/>
            <nav className='navigationLink'>
              <ul>
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="/about">A propos</Link>
                </li>
              </ul>
            </nav>
        </span>
  )
}

export default Header;