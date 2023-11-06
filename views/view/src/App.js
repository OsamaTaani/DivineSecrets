import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { ShopAll } from './pages/ShopAll';
import { ShoppingCart } from './pages/ShoppingCart';
import SignIn  from './pages/SignIn';
import  SignUp  from './pages/SignUp';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';
import { useState } from 'react';
function App() {

const [userLogin, setUserLogin] = useState(false);



  return (
    <>
    <BrowserRouter>
    <Navbar userLogin={userLogin} setUserLogin={setUserLogin} />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
        <Route path='/shopall' element={<ShopAll />}/>
        <Route path='/shoppingcart' element={<ShoppingCart />}/>
        <Route path='/signin' element={<SignIn setUserLogin={setUserLogin}/>}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/contactus' element={<ContactUs />}/>
        <Route path='/aboutus' element={<AboutUs />}/>
        <Route path='/user/:id' element={<Home />}/>
        <Route path='/profile' element={<Profile />}/>


      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
