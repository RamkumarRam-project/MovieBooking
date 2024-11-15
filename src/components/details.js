// import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
 import datas from './Movies.json'

function Details(){
    const { id } = useParams();
    const movie = datas.find((m) => m.id === parseInt(id)); // Find the movie by ID

    if (!movie) {
      return <p>Movie not found</p>;
    }
    // If no movie is found with the provided `id`, display a message
    // const[datas,setDatas]=useState();
    // useEffect(()=>{
    //     fetch(`https://backend-crud-one.vercel.app/product/${_id}`)
    //     .then(response=>response.json())
    //     .then(datas=>setDatas(datas))
    //     .catch(error=>console.error('Error:,error',error));
    //  },[_id]);

    
   return(
    <>
      
      <div className="container mt-5 details-container">
      <div className="row">
        <p key={movie.id} ></p>
          {/* Left column: Movie Image */}
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              src={movie.image}
              alt={movie.name}
              width={'100%'}
              height={'80%'}
            />
          </div>

          {/* Right column: Movie Details */}
          <div className=" col-md-6 col-lg-6">
            <p className="details-content-border">
                
              <h2 className="movie-title">{movie.title}({movie.releaseYear})</h2>
              <h5 className='title-sec '>{movie.hero},{movie.heroine}</h5>
              <p className="text-secondary"><span className='fw-bold text-dark'>About Me: </span>{movie.description}</p>
               
              <div className="view-buttom">
                <h6>
                  <span style={{ color: 'red' }}>Budget:</span> {movie.budget}
                </h6>
                <h6>
                  <span style={{ color: 'red' }}>Release Date:</span> {movie.releaseDate}
                </h6>
                <h6>
                  <span style={{ color: 'red' }}>Director:</span> {movie.director}
                </h6>
              </div>
            </p>
          </div>
        </div>
      </div>
   
                    
    </>
   )
}

export default Details;