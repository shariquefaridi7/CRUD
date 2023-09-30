import axios from "axios";
import { Button, Typography } from "@mui/material";
import {useState} from "react";
import { purple } from "@mui/material/colors";

const DelPart =(props)=>{
   const {del,setDel}=props;


   const vanish=async(id)=>{
      await axios.delete(`http://localhost:4000/returnBook-data/${id}`);
       
      const response= await axios.get("http://localhost:4000/returnBook-data");
       
       setDel(response.data)
   }
   
return(
    <><br/>
       <center><span style={{color:"purple"}}> <h3 >Retun Books Details..</h3>  </span>
     
       </center>
       <div style={{background:"black",color:"white",paddingLeft:"20px",paddingTop:"20px",paddingRight:"20px",marginLeft:"10px",marginRight:"10px"}}>

    {
         
        del?.map((resp)=>{
            return(
                <>
                
              
         
               
                <h3>Book Name : {resp.name}</h3>
                <h3>Amount Paid : Rs {resp.wallet}</h3>
                <Button variant="contained" size="small" color="error" style={{marginBottom:"5px"}} onClick={()=>vanish(resp.id)}>Delete</Button>
                <hr/>
           
            </>

            )    

        }) 
        }
    </div>
    </>
)

}

export default DelPart