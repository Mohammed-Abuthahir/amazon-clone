const ProductCard = ({ title, items }) => (
  <div className="card">
    <h2>{title}</h2>

    <div className="card-images">
      {items.map((item, idx) => (
        <div className="item" key={idx}>
          <img src={item.img} alt="" />
          <p className="cash">{item.price}</p>
        </div>
      ))}
    </div>

    <p className="discover">See more</p>
  </div>
);

export default ProductCard;
