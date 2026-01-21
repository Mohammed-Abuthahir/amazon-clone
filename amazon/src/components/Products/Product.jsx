import "./Products.css";
import { useState } from "react";
import {
  productList,
  productList1,
  productList2,
  productList4,
  productList5,
  productList6,
} from "../../data/products";
import ScrollRow from "./ScrollRow";
import ProductCard from "./ProductCard";
import img1 from "../../assets/product1.jpg";
import img2 from "../../assets/product2.jpg";
import img3 from "../../assets/product3.jpg";
import img4 from "../../assets/product4.jpg";
import img5 from "../../assets/product5.jpg";
import img6 from "../../assets/product6.jpg";
import img7 from "../../assets/product7.jpg";
import img8 from "../../assets/product8.jpg";
import img9 from "../../assets/product9.jpg";
import img10 from "../../assets/product10.jpg";
import img11 from "../../assets/product11.jpg";

import { Link } from "react-router-dom";

const bannerImages = [img1, img2, img3, img4, img5, img6, img7, img8 ,img9,img10,img11];

const Product = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % bannerImages.length);

  const prevSlide = () =>
    setIndex((prev) =>
      prev === 0 ? bannerImages.length - 1 : prev - 1
    );

  return (
    <div className="products">
      {/* Banner */}
      <div className="banner-container">
        <button className="banner-arrow left" onClick={prevSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>

       <div
          className="product-img"
          style={{ backgroundImage: `url(${bannerImages[index]})` }}
        >
          <p>
            You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <Link to={"./sales"}><span>Click here to go to amazon.in</span></Link>
          </p>
        </div>

        <button className="banner-arrow right" onClick={nextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
 <div className="whole-container">
      {/* Static Cards */}
      <div className="product-card">
        {productList.map((p, i) => (
          <ProductCard key={i} title={p.title} items={p.items} />
        ))}
      </div>

      {/* Scroll Rows */}
      <div className="products-container">
        {productList1.map((p, i) => (
          <ScrollRow key={i} title={p.title} items={p.items} />
        ))}
      </div>

      <div className="product-card">
        {productList2.map((p, i) => (
          <ProductCard key={i} title={p.title} items={p.items} />
        ))}
      </div>

      <div className="products-container">
        {[...productList4, ...productList5].map((p, i) => (
          <ScrollRow key={i} title={p.title} items={p.items} />
        ))}
      </div>

      <div className="product-card">
        {productList6.map((p, i) => (
          <ProductCard key={i} title={p.title} items={p.items} />
        ))}
      </div>
   </div>
    </div>
    
  );
};

export default Product;
