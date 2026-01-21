import './Register.css';
import { Link } from 'react-router-dom';
const Register = () => {
  
  return (
    <>
    <div className="register-container">
          <img
            className="register-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/250px-Amazon_2024.svg.png"
            alt="Amazon Logo"
          />
          <div className="register-box">
          <form className="register-form">
              <h2 className="register-title">Sign in or create account</h2>

              <label htmlFor="email" className="register-label">
                Enter mobile number or email
              </label>

              <input
                id="email"
                type="email"
                className="register-input"
                required
                autoFocus
              />

              <button type="submit" className="register-btn"
              onClick={()=> navigate('/')}>
                Continue
              </button>

              <p className="register-info">
                By continuing, you agree to Amazon's{" "}
                <span>Conditions of Use</span> and <span>Privacy Notice</span>.
              </p>

              <p className="register-help">Need help?</p>
            </form>
          </div>
          <div className='register-second-section'>
            <p> New to Amazon ? </p>
           <Link to={'/newaccount'}><p className='box'>Create Your Amazon Account</p></Link> 
          </div>
          <footer className="register-footer">
            <hr />
            <ul className="register-footer-links">
              <li>Condition of Use</li>
              <li>Privacy Notice</li>
              <li>Help</li>
            </ul>

            <p className="register-footer-copy">
              &copy; 1996-2025, Amazon.com, Inc. or its affiliates
            </p>
          </footer>
        </div>
    
    </>
  )
}

export default Register