import About from "./compoenents/About";
import Navbar from "./compoenents/Navbar";
import ProductDetails from "./compoenents/ProductDetails";
import ProductsList from "./compoenents/ProductsList";
import Slider from "./compoenents/Slider";

import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
    <Navbar />  
    <Routes>
      
      <Route path="/" 
      element={<>
        <Slider />
        <ProductsList />
        </>}/>

      <Route path="About" element={<About/>} /> 
      <Route path="product/:productId" element={<ProductDetails />} />
      {/* <Route path="Contact" element={<Contact/>} /> */}
      {/* <Route path="*" element={<h1>404 Not Found</h1>}/> */}
    </Routes> 
    </div>
  );
}

export default App;
