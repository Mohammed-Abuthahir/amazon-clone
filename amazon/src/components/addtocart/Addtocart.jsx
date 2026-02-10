import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'
import Secondnav from '../Secondnav/Secondnav'
import './Addtocart.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Addtocart = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]) 
  const [cart, setCart] = useState([])
  const CART_API = "http://localhost:8080/api/cart";
  const PROD_API = "http://localhost:8080/api/products";
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  const fetchProducts = async () => {
    try {
      const response = await axios.get(PROD_API);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCart = async () => {
    try {
      const response = await axios.get(CART_API);
      setCart(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const addToCart = async (product) => {
    const payload = {
      productId: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      rating: product.rating,
      reviews: product.reviews.toString()
    };

    try {
      const response = await axios.post(`${CART_API}/add`, payload);
      setCart([...cart, response.data]);
    } catch (error) {
      alert("Failed to add item to cart");
    }
  }

  const removeFromCart = async (dbId) => {
    try {
      await axios.delete(`${CART_API}/remove/${dbId}`);
      setCart(cart.filter(item => item.id !== dbId));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <>
      <Navbar />
      <Secondnav />
      <div className="cart-page">
        <div className="cart-container">
          <h2 className="cart-title">Products related to Coffee Pods</h2>
          <div className="cart-grid">
            {products.map((p) => (
              <div key={p.id} className="cart-card">
                <img src={p.image} alt={p.title} className="cart-image" />
                <div>
                  <p className="cart-product-title">{p.title}</p>
                  <p className="cart-rating">⭐ {p.rating} ({p.reviews})</p>
                  <h3 className="cart-price">${p.price}</h3>
                </div>
                <button className="cart-button" onClick={() => addToCart(p)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={`cart-sidebar ${cart.length > 0 ? "active" : ""}`}>
          <h3>Your Cart ({cart.length})</h3>
          {cart.length === 0 && <p className="empty-cart">Cart is empty</p>}

          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt="" />
              <div className="cart-item-info">
                <p>{item.title}</p>
                <span>${item.price} ⭐ {item.rating}</span>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="amazon-page-wrapper">
      <div className="main-content-container">
        <div className="cart-left-column">
          <div className="cart-header-row">
            <h1>Shopping Cart</h1>
            <p className="price-label">Price</p>
          </div>

          {cart.length === 0 ? (
            <div className="empty-state">
              <h3>Your Shopping Cart is empty.</h3>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="amazon-cart-item">
                <div className="item-checkbox">
                  <input type="checkbox" checked readOnly />
                </div>
                
                <div className="item-img-container">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="item-content-info">
                  <h4 className="item-title-link">{item.title}</h4>
                  <p className="stock-status">In Stock</p>
                  <label className="gift-option">
                    <input type="checkbox" /> This is a gift <span className="blue-link">Learn more</span>
                  </label>
                  
                  <div className="item-utility-bar">
                    <div className="qty-selector">
                      <button className="qty-icon-btn" onClick={() => removeFromCart(item.id)}>
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                      <span className="qty-num">1</span>
                      <button className="qty-icon-btn">+</button>
                    </div>
                    <span className="utility-link" onClick={() => removeFromCart(item.id)}>Delete</span>
                    <span className="divider">|</span>
                    <span className="utility-link">Save for later</span>
                    <span className="divider">|</span>
                    <span className="utility-link">Compare with similar items</span>
                  </div>
                </div>

                <div className="item-price-display">
                  <strong>${item.price}</strong>
                </div>
              </div>
            ))
          )}
          
          <div className="bottom-subtotal">
            Subtotal ({cart.length} items): <strong>${subtotal}</strong>
          </div>
        </div>
        <div className="cart-right-column">
          <div className="checkout-summary-card">
            <p className="summary-total">
              Subtotal ({cart.length} items): <strong>${subtotal}</strong>
            </p>
            <label className="gift-check-summary">
              <input type="checkbox" /> This order contains a gift
            </label>
            <button 
                  className="amazon-yellow-btn" 
                  onClick={() => navigate('/paymentscart')}
                >
        Proceed to checkout
      </button>
          </div>

          <div className="featured-items-mini">
             <p className="featured-heading">Featured items you may like</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default Addtocart;