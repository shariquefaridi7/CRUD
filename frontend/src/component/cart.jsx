import axios from "axios";
import { useState,useEffect } from "react";

const Cart  =()=>{

    const [data,setData]=useState([]);
useEffect(()=>{

 async function fetch(){
      const res=await axios.get("url");
      console.log(res);
      setData(res)
 }
 fetch();

},[])

return(
    <>
    <h1>Cart Page</h1>
    
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Date</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Delete/Edit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
            <>
          <tr key={item.id}>
            <td>{item.createdDate}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{(item.price)*(item.quantity)}</td>
            <td>{item.quantity}</td>
            <td><button className="btn btn-danger btn-sm">Delete</button></td>
            <td><button className="btn btn-primary btn-sm">Edit</button></td>
          </tr>
            <thead><tr><th>Total :{}</th></tr></thead>
            </>
        ))}
      
      </tbody>
    </table>





    </>
)

}
export default Cart;