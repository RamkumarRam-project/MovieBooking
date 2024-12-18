import './App.css';
import Fetchdata from './components/page';
import Details from './components/details';
import LoginForm from './components/login';
import Nav from './components/nav';
import CartView from './components/viewdata';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AbousUs from './components/about';
import Footer from './components/footer';
import { CartProvider } from './components/addcard';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import UserDashboard from './components/userboard';
import ApiMovieList from './components/API Movies/apimovielist';
import Apidetails from './components/API Movies/apidetails';
import TamilMovies from './components/tamil';
import IndianMovies from './components/API Movies/indianmovies';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Login state
  const [search, setSearch] = useState(''); // Search input

  // Check if user is already logged in on app load
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) setIsLoggedIn(true);
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return (
    <>
      <CartProvider>
        <Toaster position="top-center" reverseOrder={false} />

        <Router>
          {isLoggedIn ? (
            // Protected Routes for Logged-In Users
            <>
              <Nav search={search} setSearch={setSearch} onLogout={handleLogout} />
              <Routes>
                <Route path="/" element={<Fetchdata search={search} />} />
                <Route path="/about" element={<AbousUs />} />
                <Route path="/viewdata" element={<CartView />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/userboard" element={<UserDashboard />} />
                <Route path="/movie/:id" element={<Apidetails />} />
                <Route path="/movie/tamil" element={<TamilMovies />} />
                <Route path="/movie/all-indian" element={<IndianMovies languageCode="ml" />} />
                

                {/* API Path Routes */}
                <Route path="/popular" element={<ApiMovieList api="movie/popular" titles="Popular" LoadName="RAM-Popular"/>} />
                <Route path="/upcoming" element={<ApiMovieList api="movie/upcoming" titles="Upcoming" />} />
                <Route path="/toprates" element={<ApiMovieList api="movie/top_rated" titles="Top-Rated" />} />
                <Route path="/on_the_air" element={<ApiMovieList api="tv/on_the_air" titles="Now-Watching" />} />
                <Route path="/trending/all/day" element={<ApiMovieList api="trending/all/day" titles="Trending-All-Day" />} />
                <Route path="/trending/movie/day" element={<ApiMovieList api="trending/movie/day" titles="Trending-Movie" />} />

                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
              <Footer />
            </>
          ) : (
            // Login Routes for Not Logged-In Users
            <Routes>
              <Route
                path="/login"
                element={<LoginForm setIsLoggedIn={(state) => {
                  setIsLoggedIn(state);
                  if (state) localStorage.setItem('user', 'true'); // Save login state to localStorage
                }} />}
              />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          )}
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
