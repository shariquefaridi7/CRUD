import {useState,useEffect} from "react";

import axios from "axios";


const Home=()=>{

    const [data,setData]=useState([]);

   const send=async(id)=>{
   const resp=  await axios.post(`http://localhost:4000/cart/add-cart/${id}`);
   console.log(resp)
   }


    useEffect(()=>{
    
     async function fetch(){
          const res=await axios.get("http://localhost:4000/admin/add-product");
          console.log(res.data);
          setData(res.data)
     }
     fetch();
    
    },[])


return(
    <>
    
    <h1>Home Page</h1>

 {
    data.map((item)=>{
return(
    <>
    <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={item.image} />
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
   <p>Rs .{item.price}</p>
    <p className="card-text">{item.description}</p>
    <button className="btn btn-primary btn-sm" style={{margin:"5px"}} onClick={()=>send(item.id)}> Add Cart</button>
    <button className="btn btn-success btn-sm">Buy</button>
  </div>

  </div>

    </>
 
)
  })
      
 }
   




    </>
)


}

export default Home;