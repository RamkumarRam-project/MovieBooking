
import './App.css';
import Fetchdata from './components/page';
import Details from './components/details';
import LoginForm from './components/login';
import Nav from './components/nav';
import CartView from './components/viewdata';
import { BrowserRouter as Router, Route,  Routes, Navigate} from 'react-router-dom';
import AbousUs from './components/about';
import Footer from './components/footer';
import ContactUs from './components/contact';
import { CartProvider } from './components/addcard';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <>
      <CartProvider>
        <Toaster position="top-center" reverseOrder={false} />

        <Router>
          {!isLoggedIn ? (
            <Routes>
              <Route path="*" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
            </Routes>
          ) : (
            <>
              <Nav search={search} setSearch={setSearch} />
              <Routes>
                <Route path="/" element={<Fetchdata search={search} />} />
                <Route path="/about" element={<AbousUs/>} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/viewdata" element={<CartView />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
              <Footer />
            </>
          )}
        </Router>
      </CartProvider>
    </>
  );
};



export default App;
