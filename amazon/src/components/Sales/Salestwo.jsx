import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sales.css';
import { department, Brands } from '../../data/Sales';

const Salestwo = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMainProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/store/main');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching main products:", error);
        setLoading(false);
      }
    };

    fetchMainProducts();
  }, []);

  return (
    <>
      <div className="main">
        {/* SIDEBAR - Remains static as per your data file */}
        <div className="sidebar-container">
          <p className="sidebar-title">Department</p>
          <div className="main-radio-input">
            {department.map((dept, index) => (
              <label key={index}>
                <input type="radio" name="department" />
                <span>{dept.departmentName}</span>
              </label>
            ))}
          </div>
          <div className="main-radio-input2">
            <p className="sidebar-title1">Brands</p>
            {Brands.map((Brand, index) => (
              <label key={index}>
                <input type="checkbox" />
                <span>{Brand.brandName}</span>
              </label>
            ))}
          </div>
          <div className="customer-review">
            <p>Customer Reviews</p>
            <label>
              <input type="radio" name="review" />
              <span>All</span>
            </label>
            <label>
              <input type="radio" name="review" />
              <span>⭐⭐⭐⭐& up</span>
            </label>
          </div>
          <div className="prime-program">
            <p>Prime Programs</p>
            <label>
              <input type="checkbox" />
              <span>Prime Exclusive</span>
            </label>
          </div>
        </div>

        {/* MAIN BAR - Now dynamic from Database */}
        <div className="mainbar-container">
          <div className="mainbar-container">
            {loading ? (
              <p>Loading products...</p>
            ) : (
              products.map((item, index) => (
                <div key={item.id || index} className="feature-card1">
                  <img src={item.img} alt={item.name} />
                  <div className="feature-info1">
                    <div className="badge-row1">
                      <span className="offer1">{item.offer}</span>
                      <span className="time1">{item.timelimit}</span>
                    </div>
                    <p className="price1">
                      {/* Using ${item.price} because we stored it as a Double in DB */}
                      <strong>${item.price}</strong>
                      <span className="discount1">{item.discountPrice}</span>
                    </p>
                    <p className="name1">{item.name}</p>
                    <p className='details'>{item.details}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Salestwo;