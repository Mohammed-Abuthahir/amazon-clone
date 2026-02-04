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
      <p>Digital Contents & Devices</p>
      <li>Prime Video <i className="fa-solid fa-chevron-right"></i></li>
      <li>Amazon Music <i className="fa-solid fa-chevron-right"></i></li>
      <li>Kindle & E-Reader Books <i className="fa-solid fa-chevron-right"></i></li>
      <li>Amazon Appstore <i className="fa-solid fa-chevron-right"></i></li>

      <p>Shop by Department</p>
      <li>Electronics <i className="fa-solid fa-chevron-right"></i></li>
      <li>Computers <i className="fa-solid fa-chevron-right"></i></li>
      <li>Smart Home <i className="fa-solid fa-chevron-right"></i></li>
      <li>Arts & Crafts <i className="fa-solid fa-chevron-right"></i></li>
      <li>See All <i className="fa-solid fa-chevron-right"></i></li>

      <p>Programs & Features </p>
      <li>Gift Cards <i className="fa-solid fa-chevron-right"></i></li>
      <li>Shop By Interest <i className="fa-solid fa-chevron-right"></i></li>
      <li>Amazon Live <i className="fa-solid fa-chevron-right"></i></li>
      <li>International Shopping <i className="fa-solid fa-chevron-right"></i></li>

      <p>Help & Settings</p>
      <li>Your Account <i className="fa-solid fa-chevron-right"></i></li>
      <li>English <i className="fa-solid fa-chevron-right"></i></li>
      <li>United States <i className="fa-solid fa-chevron-right"></i></li>
      <li>Customer Service <i className="fa-solid fa-chevron-right"></i></li>
      <Link to={'/login'}><li>Sign in <i className="fa-solid fa-chevron-right"></i></li></Link>
    </ul>
    </div>
  </div>

    </>
  );
};

export default Secondnav;
