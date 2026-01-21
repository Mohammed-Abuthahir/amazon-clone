import './Footer.css';
import { useNavigate } from "react-router-dom";
import footerData from "../../data/Footer";
import footer from "../../assets/footer.JPG"
import { footerData1 } from '../../data/Footer';
import { footerData2 } from '../../data/Footer';
import { footerData3 } from '../../data/Footer';
import { footerData4 } from '../../data/Footer';
import { footerData5 } from '../../data/Footer';
import { footerData6 } from '../../data/Footer';
import { footerData7 } from '../../data/Footer';
const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='footer-container'>
        <hr />
            <div className='footer-content'>
                <h3>See personalized recommendations</h3>
            <button onClick={()=>navigate('/login')}>Sign in</button>
                <div>New Customer?<span>Start here</span></div>
            </div>
        <hr />
    </div>
   <div className="Back-to-top"
        onClick={() => document.getElementById("navbar").scrollIntoView({
        behavior: "smooth",
        })}
        >
        <p>Back to top</p>
    </div>
   <div className="footer-container2">
      {footerData.map((section, index) => (
        <ul key={index}>
          <li className="footer-title">{section.title}</li>

          {section.links.map((link, i) => (
            <li key={i} className="footer-link">
              {link}
            </li>
          ))}
        </ul>
      ))}
    </div>
     <div className='hr'>
      <hr />
      </div>  
    <div className='footer-nations'>
          <img src={footer} alt="" />
          <p><i class="fa-solid fa-earth-africa"></i> English</p>
          <p> $  USD - U.S.Dollar</p>
          <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Kj9izA807OfagA5H8Hkjwf3j3oSJpUZd_A&s" alt="" style={{width:"20px"}} />United States</p>
    </div>
    <div className="amazon-footer">
        <div className="amazon">
          {footerData1.map((section, index) => (
            <ul key={index}>
              <li className="amazon-title">{section.title}</li>

              {section.links.map((link, i) => (
                <li key={i} className="amazon-link">
                  {link}
                </li>
              ))}

            </ul>
          ))}
        </div>
        <div className="amazon">
          {footerData2.map((section, index) => (
            <ul key={index}>
              <li className="amazon-title">{section.title}</li>

              {section.links.map((link, i) => (
                <li key={i} className="amazon-link">
                  {link}
                </li>
              ))}

            </ul>
          ))}
        </div>
        <div className="amazon">
          {footerData3.map((section, index) => (
            <ul key={index}>
              <li className="amazon-title">{section.title}</li>

              {section.links.map((link, i) => (
                <li key={i} className="amazon-link">
                  {link}
                </li>
              ))}

            </ul>
          ))}
        </div>
        <div className="amazon">
          {footerData4.map((section, index) => (
            <ul key={index}>
              <li className="amazon-title">{section.title}</li>

              {section.links.map((link, i) => (
                <li key={i} className="amazon-link">
                  {link}
                </li>
              ))}

            </ul>
          ))}
        </div>
        <div className="amazon">
          {footerData5.map((section, index) => (
            <ul key={index}>
              <li className="amazon-title">{section.title}</li>

              {section.links.map((link, i) => (
                <li key={i} className="amazon-link">
                  {link}
                </li>
              ))}

            </ul>
          ))}
        </div>
        <div className="amazon">
          {footerData6.map((section, index) => (
            <ul key={index}>
              <li className="amazon-title">{section.title}</li>

              {section.links.map((link, i) => (
                <li key={i} className="amazon-link">
                  {link}
                </li>
              ))}

            </ul>
          ))}
        </div>
        <div className="amazon">
          {footerData7.map((section, index) => (
            <ul key={index}>
              <li className="amazon-title">{section.title}</li>

              {section.links.map((link, i) => (
                <li key={i} className="amazon-link">
                  {link}
                </li>
              ))}

            </ul>
          ))}
        </div>
      </div>
      <div className='last-footer'>
        <ul>
          <li>Conditions of Use</li>
          <li>Privacy Notice</li>
          <li>Consumer Health Data Privacy Disclosure</li>
          <li>Your Ads Privacy Choices</li>
        </ul>
        <p>&copy; 1996-2025, Amazon.com, Inc. or its affiliates</p>
      </div>
    </>
   
  )
}

export default Footer