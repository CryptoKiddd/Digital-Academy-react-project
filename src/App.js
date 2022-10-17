import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import ErrorPage from "./pages/Error";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Outlet
} from "react-router-dom";
import { useSelector } from "react-redux";







function App() {

  const user = useSelector(state =>state.user.currentUser)
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="products/:category" element={<ProductList/>}/>
          <Route path="product/:id" element={<Product/>}/>
         
          <Route path="cart" element={<Cart/>} />
        </Route>
       {!user && <Route path="/login" element={<Login/>} />}
       { !user && <Route path="/register" element={<Register/>} />}
      </Routes>
    </Router>
  );
}
function Layout() {
  return (
    <>
      
      <Navbar />
        <Outlet />
      <Footer />
    </>
  );
}

export default App;
