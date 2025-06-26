import React from "react";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import RegisterPage from "./components/RegisterPage";
// import LoginPage from "./components/LoginPage"; 
import Footer from "./components/Footer";
// import Cart from "./components/Cart";
import Pizza from "./components/Pizza";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <Cart /> */}
      <Pizza id="p001" />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */} 
      <Footer />
    </div>
  );
};

export default App;
