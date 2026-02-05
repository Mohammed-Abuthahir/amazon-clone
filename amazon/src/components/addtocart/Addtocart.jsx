import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Secondnav from '../Secondnav/Secondnav'
import './Addtocart.css'
import { products } from '../../data/addtocart'
import Footer from '../Footer/Footer'

const Addtocart = () => {
  const [cart, setCart] = useState([])

  
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (index) => {
    const updated = [...cart]
    updated.splice(index, 1)
    setCart(updated)
  }

  return (
    <>
      <Navbar />
      <Secondnav />

      <div className="cart-page">
        {/* LEFT PRODUCTS */}
        <div className="cart-container">
          <h2 className="cart-title">Products related to Coffee Pods</h2>

          <div className="cart-grid">
            {products.map((p) => (
              <div key={p.id} className="cart-card">
                <img src={p.image} alt={p.title} className="cart-image" />

                <div>
                  <p className="cart-product-title">{p.title}</p>
                  <p className="cart-rating">
                    ⭐ {p.rating} ({p.reviews})
                  </p>
                  <h3 className="cart-price">${p.price}</h3>
                </div>

                <button
                  className="cart-button"
                  onClick={() => addToCart(p)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CART SIDEBAR */}
        <div className={`cart-sidebar ${cart.length > 0 ? "active" : ""}`}>
          <h3>Your Cart ({cart.length})</h3>

          {cart.length === 0 && (
            <p className="empty-cart">Cart is empty</p>
          )}

          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt="" />

              <div className="cart-item-info">
                <p>{item.title}</p>
                <span>${item.price} ⭐ {item.rating}</span>
              </div>
              <br />

              <button
                className="remove-btn"
                onClick={() => removeFromCart(index)}
              >
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Addtocart;
