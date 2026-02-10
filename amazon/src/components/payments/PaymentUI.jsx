import { Link } from 'react-router-dom';
import amazonLogo from '../../assets/amazon.JPG';
import Footer from '../Footer/Footer';
import './PaymentUI.css';


const PaymentUI = () => {
  return (
    <>
    <div className="payment-page">
      <header className="payment-header">
        <div className="header-content">
          <img 
            src={amazonLogo}
            alt="Amazon" 
            className="header-logo"
          />
          <h1 className="header-title">Secure checkout <span>⌄</span></h1>
          <div className="header-cart">
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Cart</span>
          </div>
        </div>
      </header>


      <main className="payment-container">
        
    
        <div className="payment-left-col">
          <section className="checkout-step">
            <h2 className="step-title">Add delivery address</h2>
            <p className="step-subtitle">Enter your address to see delivery options</p>
            <button className="amazon-button-secondary">Add a new delivery address</button>
          </section>

          <section className="checkout-step inactive">
            <h2 className="step-title">Payment method</h2>
          </section>

          <section className="checkout-step inactive">
            <h2 className="step-title">Review items and shipping</h2>
          </section>

          {/* Footer Fine Print */}
          <div className="legal-footer">
            <p>Do you need help? Explore our <a href="#">Help pages</a> or <a href="#">contact us</a></p>
            <p>
              For an item sold by Amazon.com: When you click the "Place your order" button, we'll send you an email message 
              acknowledging receipt of your order. Your contract to purchase an item will not be complete until we send 
              you an email notifying you that the item has been shipped.
            </p>
            <p>Colorado Purchasers: <a href="#">Important information regarding sales tax you may owe in your State</a></p>
            <p>
              Within 30 days of delivery, you may return new, unopened merchandise in its original condition. 
              Exceptions and restrictions apply. See Amazon.com's <a href="#">Returns Policy</a>
            </p>
            <Link to={'/add-to-cart'}><p  className="back-link">Back to cart</p></Link>
          </div>
        </div>

        {/* Right Column: Order Summary Sidebar */}
        <div className="payment-right-col">
          <div className="order-summary-card">
            <button className="amazon-button-primary">Deliver to this address</button>
            <hr />
            <div className="summary-row">
              <span>Items:</span>
              <span>--</span>
            </div>
            <div className="summary-row">
              <span>Shipping & handling:</span>
              <span>--</span>
            </div>
            <div className="summary-row">
              <span>Estimated tax to be collected:</span>
              <span>--</span>
            </div>
            <div className="order-total">
              <span>Order total:</span>
              <span className="total-amount">$71.56</span>
            </div>
          </div>
        </div>

      </main>
    </div>
    <Footer/>
   </>
  );
};

export default PaymentUI;