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
import Logo from './logo';


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
    <>  
     
     
     <div className="container mt-3">
       <Logo/>
  <div className="row gy-4">
    {alldata.map((item) => (
      <div
        className="col-sm-12 col-md-6 movie-cards col-lg-4 col-xxl-3"
        key={item.id}
      >
        <div
          className="card border-0 shadow-sm movie-card position-relative"
          style={{
            borderRadius: "15px",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          {/* Image Section */}
          <div className="card-image position-relative">
            <img
              alt={item.title}
              src={item.image}
              className="img-fluid"
              style={{
                width: "100%",
                height: "220px",
                aspectRatio:"1/1",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
               
              }}
            />
            <i
              onClick={() => handleshow(item.id)}
              className="fa-solid fa-broadcast-tower blinking-icon"
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "rgba(255, 255, 255, 0.4)",
                padding: "6px",
                borderRadius: "50%",
                cursor: "pointer",
               
              }}
            ></i>
          </div>

          {/* Content Section */}
          <div className="p-2 content-sec">
            <h5
              className="text-dark text-truncate"
              style={{ fontWeight: "bold", marginBottom: "10px"}}
            >
              {item.title}
            </h5>
            <p className="text-muted mb-3">
              Ticket Price:{" "}
              <span className="text-success fw-bold">{item.ticketPrice}</span>
            </p>

            {/* Buttons Section */}
            <div className="d-flex justify-content-center gap-2">
              <button
                className="btn btn-danger"
                style={{
                  fontWeight: "bold",
                  borderRadius: "30px",
                }}
                onClick={() => addToCart(item)}
              >
                Add
              </button>
              <Link to={`/details/${item.id}`}>
                <button
                  className="btn btn-primary"
                  style={{
                    fontWeight: "bold",
                    borderRadius: "30px",
                  }}
                >
                  View
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
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
