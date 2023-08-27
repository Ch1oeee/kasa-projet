import { Link } from 'react-router-dom';
import header from '../header/header.scss'
import LOGO from '../../Assets/LOGO.svg'


export default function Header() {
  return (
        <span className='Header'>
          <Link to="/"> <img src ={LOGO} alt='logo kasa'className='logoKasa'/> </Link> 
            <nav className='navigationLink'>
              <ul>
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="/A-propos">A propos</Link>
                </li>
              </ul>
            </nav>
        </span>
  )
}
