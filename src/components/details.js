import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'


function Details(){
    const{_id}=useParams();
    const[datas,setDatas]=useState();
    useEffect(()=>{
        fetch(`https://backend-crud-one.vercel.app/product/${_id}`)
        .then(response=>response.json())
        .then(datas=>setDatas(datas))
        .catch(error=>console.error('Error:,error',error));
     },[_id]);


   return(
    <>
      
         <div className="container mt-5 datailes-container">
            <div className="row ">
                
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    
                    {datas ? ( 
                        <img src={datas.image} alt="error" width={'100%'} height={'80%'}/>
                    ) :(
                        <h4 className="view-load">RAM CARD...</h4>
                    )
                    }
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    {datas?(
                        <p className="details-content-border">
                            <h2 className="text-info">{datas.name}</h2>
                            <p className="text-secondary">{datas.description}</p>

                            <div className="view-buttom">
                            <h6 style={{color:""}}><span style={{color:"red"}}>Budget:</span>{datas.budget}</h6>
                            <h6 style={{color:""}}><span style={{color:"red"}}> Releasedate:</span>{datas.releasedate}</h6>
                            <h6 style={{color:""}}><span style={{color:"red"}}> Director:</span>{datas.director}</h6>
                            </div>
                        </p>):
                        (
                            <p className="view-load">WELCOME...</p>
                        )
                    }
                  </div>
              </div>
            </div>
        
    </>
   )
}

export default Details;