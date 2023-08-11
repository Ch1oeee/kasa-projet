import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'
import header from '../header/header.scss'


export default function Header() {
  return (
        <span className='Header'>
          <Link to="/"> <img src ={logo} alt='logo kasa'className='logoKasa'/> </Link> 
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
