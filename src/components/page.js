// import { useEffect, useState } from'react';
// import { Link } from 'react-router-dom';
// //import Nav from './nav';
// import Footer from './footer';
// import React from 'react';
// import { Card } from 'antd';
// const { Meta } = Card;

// export default function Fetchdata(){
//     const [date,setDate]=useState();
//     const [error,setError]=useState(null);
//     const [loading,setLoading]=useState(true);
//     const[count,setCount]=useState('');


//     useEffect(()=>{
//        fetch('https://backend-crud-one.vercel.app/product')
//        .then(response=>response.json())
//        .then(date=>setDate(date))
//        .then(error=>setError(error))
//        .then(loading=>setLoading(loading))
//     },[])

//     if(loading) return <p>loading..</p>
//     if (error) return <p>Error {error.message}</p>
     
//     function addon(){
//        setCount(prevCount=>Number(prevCount+1))
//     }

//    return(
//     <>
    
// const App = () => (
  
// );
// export default App;
//          {/* <Nav count={count}/>
//     {date.map(item=>(
//                 <div className="col-lg-3">
//                 <div className="card my-3" key={item.id}>
//                     <img src={item.image} alt='error'/>
//                     <h6>{item.name}</h6>
//                     <p>{item.title}</p>
//                     <p>{item.releasedate}</p>
//                     <p>{item.director}</p>
//                     <p>{item.budget}</p>
//                     <p>{item.ticketprice}</p>
//                       <div className='buttons'>
//                          <button className='add'onClick={addon}>Add To Cart</button>
//                          <Link to={`/details/${item._id}`}>
//                            <button className='view'>View</button>
//                          </Link>
                         
//                       </div>
//                  </div>
//                 </div>
//             ))}
//              */}
//             <Card
//     hoverable
//     style={{
//       width: 240,
//     }}
//     cover={<img alt="example" src={itemimage} />}
//   >
//    <h6>{item.name}</h6>
//                     <p>{item.title}</p>
//                     <p>{item.releasedate}</p>
//                     <p>{item.director}</p>
//                     <p>{item.budget}</p>
//                     <p>{item.ticketprice}</p>
//                       <div className='buttons'>
//                          <button className='add'onClick={addon}>Add To Cart</button>
//                          <Link to={`/details/${item._id}`}>
//                            <button className='view'>View</button>
//                          </Link>
//                          </div>

//     <Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card>
//   <Footer/>
//     </>
//    )
// };
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'antd';
import { useContext } from 'react';
import { CartContext } from './addcard';
import movies from './Movies.json';
const { Meta } = Card;

export default function Fetchdata({search}) {
  // const [data, setData] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);
  
  const {addToCart}=useContext(CartContext)
  // useEffect(() => {
  //   fetch('https://backend-crud-one.vercel.app/product')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <h6 className='view-load'>RAM WEBSITE...</h6>;
  // if (error) return <p>Error: {error.message}</p>;
   
  
  
  const[open,setOpen]=useState(null)
  const alldata=movies.filter((item)=>{
   return item.title.toLocaleLowerCase().includes(search.toLowerCase())
  })

 const handleshow=(id)=>{
        setOpen(id)
        
  }
  const handleclose=()=>{
    setOpen(null)
}
  return (
    <>    <div className='home-top'>
           <div  className='top-name text-center mt-3'>
             <h4 className='cinema-title'>RAM__CINEMAS</h4>
           </div>  
           </div>
    
     
    <div className='container mt-5 home-color'>
      <div className="row home-pages">
        {alldata.map((item) => (
          <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3 home-page " key={item.id}>
            <Card   width="100%"  
              hoverable
              style={{ width: '100%', marginBottom:"12%", backgroundColor:'lightblue'}}
              cover={<img className='show-times' alt={item.title} src={item.image} width={"100%"}/>}
            > 
            
            
            <i onClick={()=>handleshow(item.id)} class="fa-solid fa-tower-broadcast fs-5 blinking-icon"></i>
            <div className=' card-content'>
              
              <Meta title={item.title}/>
              <p>{item.ticketPrice}</p>
              </div>
              <div className='buttons'>
                <button className=' btn btn-danger addto-cart w-100' onClick={()=>addToCart(item)}>Add</button>
                <Link to={`/details/${item.id}`}>
                  <button className=' btn btn-primary view-card  w-100'>View</button>
                </Link>
              </div>
            </Card>
          </div>
        ))};
      </div>
    </div>
       

    {movies.map((popup) => (
        open ===parseInt(popup.id)  && (
          <div key={popup.id} className="popup-overlay">
            <div className="popup">
             <div className='row'>
              <div className='col-md-6 '>
                <div className='row '>
                  <div className='col-sm-6  popup-sec'>
                 <img src={popup.image} alt={popup.title} height={"120px"} width={"120px"}/>
                 <h2 className='fw-light' style={{color:"crimson"}}>{popup.title}</h2>
                 </div>
                 <div className='col-sm-6 popup-sec'>
              <h6 className='fw-light'>U/A</h6>
              <h4><p className='movie-rating'>&#9733;&#9733;&#9733;&#9734;&#9734;</p>{popup.rating}</h4>
              </div>
              </div>
              </div>
              <div className='col-md-6'>
              
              <h5 className='show-Available'>Show Available </h5>
              <ul>
              <li>{popup.showtimes}</li>
              </ul>
             <i onClick={handleclose} class="fas fa-times cancel-icon"></i> 
              </div>
              </div>
            </div>
          </div>
        )
      ))}
    </>
  );
}
