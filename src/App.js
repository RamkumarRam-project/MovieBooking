
import './App.css';
import Fetchdata from './components/page';
import Details from './components/details';
import LoginForm from './components/login';
import Nav from './components/nav';
import CartView from './components/viewdata';
import { BrowserRouter as Router, Route,  Routes, Navigate} from 'react-router-dom';
import AbousUs from './components/about';
import Footer from './components/footer';
import { CartProvider } from './components/addcard';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import UserDashboard from './components/userboard';
import ApiMovieList from './components/API Movies/apimovielist';
import Apidetails from './components/API Movies/apidetails';












function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <>
      <CartProvider>
        <Toaster position="top-center" reverseOrder={false} />

        <Router>
          {isLoggedIn ? (   
               //isLoggedIn default this state is false ,!isLoggedIn use not the condition is true that run be this statment and login complete will be change the state agian  setIsLoggedIn(true) true and login complete instial state value is true,!isLoggedIn agian this is false and run main components
            <Routes>               
              <Route path="*" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
            </Routes>
          ) : (
            <>
              <Nav search={search} setSearch={setSearch} />
              <Routes>
                <Route path="/" element={<Fetchdata search={search} />} />
                <Route path="/about" element={<AbousUs/>} /> 
                <Route path="/viewdata" element={<CartView />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/userboard" element={<UserDashboard/>}/>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/movie/:id" element={<Apidetails/>}/>
                

               {/*API path route*/}
               <Route path="/popular" element={<ApiMovieList api="movie/popular" titles="Popular"/>} />
               <Route path="/upcoming" element={<ApiMovieList api="movie/upcoming"  titles="Upcoming"/>} />
               <Route path="/toprates" element={<ApiMovieList api="movie/top_rated"  titles="Top-Rated"/>} />
               <Route path="/playing" element={<ApiMovieList api="movie/now_playing"  titles="Playing"/>} />
               <Route path="/on_the_air" element={<ApiMovieList api="tv/on_the_air"  titles="Now-Watching"/>} />

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


{/*   <Route path="/tv_changes" element={<ApiMovieList api="tv/changes"  titles="TV Watch"/>} />
               <Route path="/tv_fav" element={<ApiMovieList api="account/null/favorite/tv"  titles="TV fav"/>} />
               <Route path="/tv_movie" element={<ApiMovieList api="account/null/favorite/movie"  titles="TV movie"/>} />
               <Route path="/tv_list" element={<ApiMovieList api="account/null/favorite/list"  titles="list"/>} />
               <Route path="/rated/movies" element={<ApiMovieList api="account/null/rated/movies"  titles="rated/movies"/>} />
               <Route path="/rated/tv" element={<ApiMovieList api="account/null/rated/tv"  titles="rated/tv"/>} />
               <Route path="/tv/episodes" element={<ApiMovieList api="account/null/rated/tv/episodes"  titles="tv/episodes"/>} />
               <Route path="/watchlist/movies" element={<ApiMovieList api="account/null/watchlist/movies"  titles="watchlist/movies"/>} />
               <Route path="/watchlist/tv" element={<ApiMovieList api="account/null/watchlist/tv"  titles="watchlist/tv"/>} />
*/ }