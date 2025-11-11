import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li> 
                    <Link to={'/home'}  />
                </li>
                <li>
                    <Link to={'/users'} />
                </li>
                <li>
                    <Link to={'/posts'} />
                </li>
                <li>
                    <Link to={'/register'} />
                </li>
            </ul>
        </nav>
    )
}

export default Nav