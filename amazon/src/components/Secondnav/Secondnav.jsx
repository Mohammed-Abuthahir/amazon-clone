import { useState } from "react";
import "./Secondnav.css";
import "./Sidebar.css";
import { Link } from 'react-router-dom';

const Secondnav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* SECOND NAV */}
      <div className="second-nav">
        <div className="nav-ul">
          <ul>
            <li className="nav-icon" onClick={() => setOpen(true)}>
              <i className="fa-solid fa-bars"></i> All
            </li>
            <li>Today's Deals</li>
            <li>Prime Video</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Customer Service</li>
            <li>Sell</li>
          </ul>
        </div>
      </div>
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      ></div>
      <div className={`sidebar ${open ? "open" : ""}`}>
  <div className="sidebar-header">
    <i className="fa-solid fa-user profile-icon"></i>
    <h3>Hello, Sign in</h3>
    <i
      className="fa-solid fa-xmark close-icon"
      onClick={() => setOpen(false)}
    ></i>
  </div>

  {/* SCROLLABLE CONTENT */}
  <div className="sidebar-content">
    <ul className="sidebar-list">
      <h2>Digital Contents & Devices</h2>
      <li>Prime Video</li>
      <li>Amazon Music</li>
      <li>Kindle & E-Reader Books</li>
      <li>Amazon Appstore</li>

      <h2>Shop by Department</h2>
      <li>Electronics</li>
      <li>Computers</li>
      <li>Smart Home</li>
      <li>Arts & Crafts</li>
      <li>See All</li>

      <h2>Programs & Features</h2>
      <li>Gift Cards</li>
      <li>Shop By Interest</li>
      <li>Amazon Live</li>
      <li>International Shopping</li>

      <h2>Help & Settings</h2>
      <li>Your Account</li>
      <li>English</li>
      <li>United States</li>
      <li>Customer Service</li>
      <Link to={'/login'}><li>Sign in</li></Link>
    </ul>
    </div>
  </div>

    </>
  );
};

export default Secondnav;
