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
      
         <div className="container">
            <div className="row">
                
                  <div className="col-md-6">
                    
                    {datas ? ( 
                        <img src={datas.image} alt="error" width={'100%'} height={'80%'}/>
                    ) :(
                        <p>loading...</p>
                    )
                    }
                  </div>
                  <div className="col-md-6">
                    {datas?(
                        <>
                            <h2 className="text-danger">{datas.name}</h2>
                            <h2 className="text-info">{datas.director}</h2>
                            <p className="text-secondary">{datas.description}</p>
                        </>):
                        (
                            <p>loading</p>
                        )
                    }
                  </div>
              </div>
            </div>
        
    </>
   )
}

export default Details;