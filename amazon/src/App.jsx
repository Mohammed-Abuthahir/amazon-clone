import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import PaymentUI from './components/payments/paymentUI'
import Product from './components/Products/Product'
import Secondnav from './components/Secondnav/Secondnav'
import { useState } from 'react'
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
    <Navbar setSearchTerm={setSearchTerm} />
    <Secondnav/>
    <Product searchTerm={searchTerm} />
     <Footer/>
    
    </>
  )
}

export default App