import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li> 
                    <NavLink to={'/home'}  />
                </li>
                <li>
                    <NavLink to={'/users'} />
                </li>
                <li>
                    <NavLink to={'/posts'} />
                </li>
                <li>
                    <NavLink to={'/register'} />
                </li>
            </ul>
        </nav>
    )
}

export default Nav