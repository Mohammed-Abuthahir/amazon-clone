import './Navbar.css';
import { Link } from 'react-router-dom'; 
const Navbar = ({ setSearchTerm }) => {
  return (
    <>
    <nav id='navbar'>
      <div className="navbar">
          <div className='nav-logo'></div>
             <div className='nav-location'>
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="nav-location-india">
                        <p>Deliver to</p>
                        <h3>India</h3>
                    </div>
             </div>
            <div className='nav-input'>
                <p className='Arrow-icon'>All <i className="fa-solid fa-caret-down"></i></p>
        <input 
          type="text" 
          placeholder='Search Amazon'
          onChange={(e) => setSearchTerm(e.target.value)} // Capture typing
        />
        <div className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></div>
            </div>     
            <div className='nav-region'>
                <img src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg" alt="" />
                <h1>EN</h1>
            </div> 
            <div className='nav-login'>
                <Link to={'/login'}><p >Hello,sign in</p><h3>Accounts & Lists</h3></Link>
            </div>
            <div className="nav-return">
                <Link to={'/register'}><p>Returns</p><h3>& Order</h3></Link>
            </div>
            <div className='nav-add-cart'>
                <i class="fa-solid fa-cart-shopping"></i>
                <Link to={'/add-to-cart'}><p style={{color:"white"}}>Cart</p></Link>
            </div>
         </div>
    </nav>
    </>
  );
};

export default Navbar