import { salesProducts, features, buttonNames } from "../../data/Sales";
import { useRef } from "react";
import "./Sales.css";
import Navbar from "../Navbar/Navbar";
import Secondnav from "../Secondnav/Secondnav";
import Salestwo from "./Salestwo";
import Footer from "../Footer/Footer";

const Sales = () => {
  const categoryRef = useRef(null);
  const scrollCategoryLeft = () =>
    categoryRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollCategoryRight = () =>
    categoryRef.current.scrollBy({ left: 300, behavior: "smooth" });
  const featureRef = useRef(null);
  const scrollFeatureLeft = () =>
    featureRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollFeatureRight = () =>
    featureRef.current.scrollBy({ left: 300, behavior: "smooth" });
  const buttonRef = useRef(null);
  const scrollButtonLeft = () =>
    buttonRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollButtonRight = () =>
    buttonRef.current.scrollBy({ left: 300, behavior: "smooth" });
  return (
    <>
      <Navbar />
      <Secondnav />
      <div className="catagory">
        <div className="catagory-img">
          <img src="https://m.media-amazon.com/images/G/01/DiscoTec/2025/Deals/WinterSale/LP_Banners/26Deals_WinterSale_13700_LP_Header_ShopAll.jpg"/>
        </div>
        <div className="shop-catagory">
          <h2>Shop deals by category</h2>
          <button className="scroll-arrow left" onClick={scrollCategoryLeft}>
            ❮
          </button>

          <ul className="sales-products" ref={categoryRef}>
            {salesProducts.map((product, index) => (
              <li key={index} className="sales-item">
                <img src={product.img} alt={product.desc} />
                <p>{product.desc}</p>
              </li>
            ))}
          </ul>
          <button className="scroll-arrow right" onClick={scrollCategoryRight}>
            ❯
          </button>
        </div>
        <div className="today-features">
          <h2>Today's featured deals</h2>
          <button className="scroll-arrow left" onClick={scrollFeatureLeft}>
            ❮
          </button>

          <div className="features-container" ref={featureRef}>
            {features.map((item, index) => (
              <div key={index} className="feature-card">
                <img src={item.img} alt={item.name} />
                <div className="feature-info">
                  <div className="badge-row">
                    <span className="offer">{item.offer}</span>
                    <span className="time">{item.timelimit}</span>
                  </div>
                  <p className="price">
                    <strong>{item.price}</strong>
                    <span className="discount">{item.discount}</span>
                  </p>
                  <p className="name">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="scroll-arrow right" onClick={scrollFeatureRight}>
            ❯
          </button>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="scroll-btn left" onClick={scrollButtonLeft}>
          ❮
        </button>
        <div className="button-container" ref={buttonRef}>
          {buttonNames.map((btn, index) => (
            <button key={index} className="category-btn">
              {btn.name}
            </button>
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollButtonRight}>
          ❯
        </button>
      </div>
      <Salestwo/>
      <Footer/>
    </>
  );
};

export default Sales;
