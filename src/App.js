import Navbar from "./Components/Header/Navbar.js";
import Cart from "./Components/Main_Page/Cart/Cart.js";
import Products from "./Components/Main_Page/Product-Page/Products.js";
import { Route, Routes } from "react-router-dom";
import Address from "./Components/Main_Page/Cart/Address/Address.js";


const App = () => {
    return (
       <>
       <Navbar/>
      
       
       
       <Routes>
                {/* <Route path="/home" element={<Navbar />} /> */}
                {/* <Route path="/about" element={<Parent />} /> */}
                <Route path="/Products" element={<Products />} />
                {/* <Route path="/SignUp" element={<SignUp />} /> */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/address" element={<Address/>} />
            </Routes>
       </>
   
    )

};

export default App;