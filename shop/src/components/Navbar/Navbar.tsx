import { Bag, Person } from 'react-bootstrap-icons';
import ProductSearch from '../ProductSearch';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useEffect, useState } from 'react';

const Navbar = () => {

const userData = localStorage.getItem('username')
const user = userData ? JSON.parse(userData) : null

const [cartCount, setCartCount] = useState<number>(0)

useEffect(() => {
    const fetchCartCount = async () => {
      if (!user?.id) return;
    
      try {
        const response = await fetch(`http://localhost:8080/api/cart-items/user/${user.id}/count`)
        if (response.ok) {
          const count = await response.json()
          setCartCount(count)
        }
      } catch (error) {
        console.error("Error cargando carrito:", error)
      }
    }

    fetchCartCount()
  }, [user?.id])

  
  return (

      <header className="border-bottom sticky-top blur-soft"> 
        <nav className="navbar navbar-expand-lg navbar-light px-md-4">
          <div className="container"> 
            <Link className="navbar-brand" to="/"> 
              <img id="logo" src="/src/assets/img/logo.svg" alt="Logo" style={{height: '60px'}} /> 
            </Link>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav gap-3"> 
                <li className="nav-item">
                  <Link className="nav-link text-black" to="/articles">All</Link>
                </li>
                <li className="nav-item"><a className="nav-link text-black" href="#">Men</a></li>
                <li className="nav-item"><a className="nav-link text-black" href="#">Women</a></li>
                <li className="nav-item"><a className="nav-link text-black" href="#">Sneakers</a></li>
              </ul>
            </div>

            <div className="d-flex align-items-center gap-3">
              <ProductSearch />

              <button className="btn btn-link text-black p-1 position-relative">

                <Link to="/cart">
                  <Bag size={24} />
                </Link>
                <span id="bag-count" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                  {cartCount}
                </span>
              </button>

              { user ? (
                  <img 
                    src={user.profileImgUrl || '/src/assets/img/default-avatar.png'} 
                    alt="User Avatar" 
                    className="rounded-circle" 
                    width="32" 
                    height="32" 
                  />
              ) : (
                  <Link to="/login">
                      <Person size={32} color='black'/>
                  </Link>
              ) }
              <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </nav>
      </header>
  )
}

export default Navbar 
