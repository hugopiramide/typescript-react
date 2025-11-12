import './ErrorPage.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return(
        <div id='error'>
            <p>There was an unexpected error. Plase retry again later.</p>
            <Link to='/' />
        </div>
    )
}

export default ErrorPage