// import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
 import datas from './Movies.json'
import Logo from './logo';

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
          <Logo/>

<div className="row m-0">
       <div className="col-sm-6">
         <div className="">
           <img
             src={movie.image}
             alt={movie.title}
             className="details-img mb-3"
             width={"100%"}
           />
           </div>
        </div>

          
           <div className="col-sm-6">
           <table className="table w-100  ">
             <tbody>
               <tr>
                 <th>Hero</th>
                 <td>{movie.hero}</td>
               </tr>
               <tr>
                 <th>Heroine</th>
                 <td>{movie.heroine}</td>
               </tr>
               <tr>
                 <th>Rating</th>
                 <td>{movie.rating}</td>
               </tr>
               <tr>
                 <th>Budget</th>
                 <td>{movie.budget}</td>
               </tr>
               <tr>
                 <th>ReleaseDate</th>
                 <td>{movie.releaseDate}</td>
               </tr>
               <tr>
                 <th>TicketPrice</th>
                 <td>{movie.ticketPrice}</td>
               </tr>
               <tr>
                 <th>Director</th>
                 <td>{movie.director}</td>
               </tr>
               <tr>
                 <th>Showtimes</th>
                 <td>{movie.showtimes}</td>
               </tr>
             </tbody>
           </table>
           <p className='text-secondary'><span className='text-dark fs-5 fw-1'>About Me : </span>{movie.description}</p>
           </div>
         </div>
     
    </>
  )
   
}

export default Details;