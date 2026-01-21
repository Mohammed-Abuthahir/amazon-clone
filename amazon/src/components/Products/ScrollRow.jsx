import { useRef } from "react";

const ScrollRow = ({ title, items }) => {
  const rowRef = useRef(null);

  const scrollRight = () => {
    rowRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollLeft = () => {
    rowRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  return (
    <div className="product1-card">
      <h2>{title}</h2>

      <button className="arrow left" onClick={scrollLeft}>
        <i className="fa-solid fa-angle-left"></i>
      </button>

      <button className="arrow right" onClick={scrollRight}>
        <i className="fa-solid fa-angle-right"></i>
      </button>

      <div className="product1-images" ref={rowRef}>
        {items.map((item, i) => (
          <img key={i} src={item.img} alt={`product-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default ScrollRow;
