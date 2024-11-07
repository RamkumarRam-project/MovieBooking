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
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'antd';
import { useContext } from 'react';
import { CartContext } from './addcard';

const { Meta } = Card;

export default function Fetchdata() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState('');

  const {addToCart}=useContext(CartContext)
  useEffect(() => {
    fetch('https://backend-crud-one.vercel.app/product')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
   
    <div className='container'>
      <div className="row">
        {data.map((item) => (
          <div className=" col-sm-12 col-md-6 col-lg-4 col-xxl-3" key={item.id}>
            <Card width="100%"
              hoverable
              style={{ width: '100%', margin: '16px', backgroundColor:'lightblue'}}
              cover={<img alt={item.name} src={item.image} width={"100%"}/>}
            >
              <Meta title={item.name} />
              {/* <p>Release Date: {item.releasedate}</p> */}
              <p>Director: {item.director}</p>
              {/* <p>Budget: {item.budget}</p> */}
              <p>Ticket Price: {item.ticketprice}</p>
              {/* <div className='buttons'> */}
                <button className=' btn btn-danger w-100' onClick={()=>addToCart(item)}>Add To Cart</button>
                <Link to={`/details/${item._id}`}>
                  <button className=' btn btn-primary w-100 mt-2'>View</button>
                </Link>
              {/* </div> */}
            </Card>
          </div>
        ))};
      </div>
    </div>
      
    </>
  );
}
