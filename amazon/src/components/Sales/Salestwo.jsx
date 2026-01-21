import './Sales.css';
import { department } from '../../data/Sales';
import { Brands } from '../../data/Sales';
import { features } from '../../data/Sales';
import {mainproduct} from '../../data/Sales';
const Salestwo = () => {
  return (
    <>
    
<div className="main">
  {/* SIDEBAR */}
  <div className="sidebar-container">
    <p className="sidebar-title">Department</p>
    <div className="main-radio-input">
      {department.map((dept)=>(
        <label>
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
  <div className="mainbar-container">
    <div className="mainbar-container">
                {mainproduct.map((item, index) => (
                  <div key={index} className="feature-card1">
                    <img src={item.img} alt={item.name} />
                    <div className="feature-info1">
                      <div className="badge-row1">
                        <span className="offer1">{item.offer}</span>
                        <span className="time1">{item.timelimit}</span>
                      </div>
                      <p className="price1">
                        <strong>{item.price}</strong>
                        <span className="discount1">{item.discount}</span>
                      </p>
                      <p className="name1">{item.name}</p>
                      <p className='details'>{item.details}</p>
                    </div>
                  </div>
                ))}
        </div>
  </div>
</div>


    </>
  )
}

export default Salestwo