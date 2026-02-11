import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import amazonLogo from '../../assets/amazon.JPG';
import Footer from '../Footer/Footer';
import './PaymentUI.css';

const PaymentUI = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  };
  const handlePlaceOrder = () => {
  alert("Order Placed Successfully!");
  navigate('/'); 
};

  return (
    <>
      <div className={`payment-page ${isModalOpen ? 'modal-blur' : ''}`}>
        <header className="payment-header">
          <div className="header-content">
            <img src={amazonLogo} alt="Amazon" className="header-logo" />
            <h1 className="header-title">Secure checkout <span>⌄</span></h1>
            <div className="header-cart" onClick={() => navigate('/add-to-cart')}>
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
              {/* Corrected: This now triggers the Modal */}
              <button className="amazon-button-secondary" onClick={toggleModal}>
                Add a new delivery address
              </button>
            </section>

            <section className="checkout-step inactive">
              <h2 className="step-title">Payment method</h2>
            </section>

            <section className="checkout-step inactive">
              <h2 className="step-title">Review items and shipping</h2>
            </section>

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
              <Link to={'/add-to-cart'} className="back-link">Back to cart</Link>
            </div>
          </div>

          <div className="payment-right-col">
            <div className="order-summary-card">
            <button className="amazon-button-primary" onClick={handlePlaceOrder}>
                          Deliver to this address
                        </button>
              <hr />
              <div className="summary-row"><span>Items:</span><span>--</span></div>
              <div className="summary-row"><span>Shipping & handling:</span><span>--</span></div>
              <div className="summary-row"><span>Estimated tax to be collected:</span><span>--</span></div>
              <div className="order-total">
                <span>Order total:</span>
                <span className="total-amount">$71.56</span>
              </div>
            </div>
          </div>
        </main>

        {/* Modal Logic Integration */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="address-modal">
              <div className="modal-header">
                <h3>Add an address</h3>
                <button className="close-btn" onClick={toggleModal}>✕</button>
              </div>
              <div className="modal-body">
                <h2>Enter a new shipping address</h2>
                <div className="autofill-box">
                  <span>Save time. Autofill your current location.</span>
                  <button className="autofill-btn">Autofill</button>
                </div>
                <form className="address-form">
                  <label>Full name (First and Last name)</label>
                  <input type="text" placeholder="Full Name" />
                  <label>Phone number</label>
                  <input type="text" placeholder="Phone Number" />
                  <label>Address</label>
                  <input type="text" placeholder="Street address" />
                  <div className="city-state-zip">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                    <input type="text" placeholder="ZIP" />
                  </div>
                 <button type="button" className="amazon-button-primary mt-4" onClick={toggleModal}>
                    Save and use this address
                </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default PaymentUI;