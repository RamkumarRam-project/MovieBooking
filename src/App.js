
import './App.css';
import Fetchdata from './components/page';
import Details from './components/details';
import LoginForm from './components/login';
import Nav from './components/nav';
import CartView from './components/viewdata';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import AbousUs from './components/about';
import Footer from './components/footer';
import ContactUs from './components/contact';
import { CartProvider } from './components/addcard';
import { Toaster } from 'react-hot-toast';


function App() {
   
     
   
  return (  
    <> 
    
    <CartProvider>
    <Toaster position="top-center" reverseOrder={false}/>

    <Router>
        <Nav/>
      <Routes>
        <Route path='/home' element={<Fetchdata/>}/>
        <Route path='/details/:_id' element={<Details/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/viewdata' element={<CartView/>}/>
        <Route path='/about' element={<AbousUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>

      </Routes>
       <Footer/>
      </Router>
    

      </CartProvider>
      
  
    </>
  );

}

export default App;
