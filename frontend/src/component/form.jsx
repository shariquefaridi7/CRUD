import { Typography, TextField, Button, Grid, Card, CardContent, CardActions,Box } from "@mui/material";
import { useState, useEffect } from "react";
import {  toast } from 'react-toastify';
import axios from 'axios';
import DelPart from "./delPart";





const Form = () => {

    const [data, setData] = useState("");
    const [info, setInfo] = useState([]);
    const [del,setDel]=useState([]);
    const [change,setChange] =useState(false);
 


    const submit = async () => {
       


         await axios.post("http://localhost:4000/Book-Data", { name: data});
        
        setData("");
        const res = await axios.get("http://localhost:4000/Book-Data");
      
        setInfo(res.data);
        const resp= await axios.get("http://localhost:4000/returnBook-data");
        setDel(resp.data);


    }


const changeFormat=(dateTimeString)=>{

    
      const date = dateTimeString.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    });

    return date;


}
    const ret = async(id,amount) => {
    if(amount==0){
        await axios.delete(`http://localhost:4000/Book-Data/${id}/${amount}`);
        const res = await axios.get("http://localhost:4000/Book-Data");
        setInfo(res.data);
        const resp= await axios.get("http://localhost:4000/returnBook-data");
         setDel(resp.data);

    }else {
        
         setChange(id);
         const res = await axios.get("http://localhost:4000/Book-Data");
         setInfo(res.data);
      
    }
}

const pay=async(id,amount)=>{

        try {
       const response = await axios.post('http://localhost:4000/payment/',{amount,id});
         const res = response.data;
          console.log(response);
    
          if (res.success) {
            console.log("innn")
            const options = {
              key: `${res.key_id}`,
              amount: `${res.amount}`,
              currency: 'INR',
              name: `${res.product_name}`,
             
              image: 'https://dummyimage.com/600x400/000/fff',
              order_id: `${res.order_id}`,
              handler: async function (response) {
            
                toast("Payment Successfully....");
                 localStorage.setItem("isValid","yes");
                 try {
                    await axios.delete(`http://localhost:4000/Book-Data/${id}/${amount}`);
                    const res = await axios.get("http://localhost:4000/Book-Data");
                    setInfo(res.data);
                    const resp= await axios.get("http://localhost:4000/returnBook-data");
                     setDel(resp.data);
                     setChange(false)
                   
                 } catch (error) {
                    console.log(error)
                 }
              
             
              },
              prefill: {
                contact: `${res.contact}`,
                name: `${res.name}`,
                email: `${res.email}`,
              },
           
              theme: {
                color: '#2300a3',
              },
            };
            const razorpayObject = new window.Razorpay(options);
              razorpayObject.on('payment.failed', function (response) {
              toast("Failed...");
            });
            razorpayObject.open();
          } else {
            toast("Payment Successfully....");
           
          }
          
        } catch (error) {
          console.error('Error:', error.message);
        }
      
   
}


useEffect(() => {
    const fetchData = async () => {
        const res = await axios.get("http://localhost:4000/Book-Data");
        setInfo(res.data);
        const resp= await axios.get("http://localhost:4000/returnBook-data");
        setDel(resp.data);

    }
    fetchData();
}, [])


    return (
        <> 
         <center>
             <Typography variant="h4" color="purple">Libraray App</Typography>
             <Box
                    sx={{ width: 200, height: 60, border: "1px solid black", padding: 5, borderRadius: 2, marginTop: 2.5 }}>
  
                    <TextField id="outlined-basic" label="Book Name" variant="outlined" size="small" onChange={(e) => setData(e.target.value)} value={data} /><br /><br />
                    <Button variant="contained" size="small" onClick={submit}>Submit</Button>
               

            </Box>
            </center>
            <br /><br />
            <Grid
                container
                spacing={4}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                paddingLeft={3}
                paddingRight={3}
            >
                {
                    info.map((resp) => {
                        const currentDate = new Date();
                        let wallet = 0
                        const createdDate = resp.createdAt;  
                        let returndate = new Date(createdDate);
                        const tDate=changeFormat(returndate);
                        const diffHrs = Math.abs(currentDate.getMinutes() - returndate.getMinutes());
                       
                        if (diffHrs != 0) {
                            wallet = 10 * diffHrs;

                        }

                        returndate.setHours(returndate.getHours() + 1);
                       const rDate =changeFormat(returndate)
                      


                              if(change!=resp.id){
                        return (
                            <>
                                <Grid container
                                    item xs={12} sm={6} md={3} lm={3}>
                                    <Card variant="outlined" >
                                        <CardContent>

                                            <Typography >
                                                <b>Book Name :   {resp.name}</b>
                                            </Typography>

                                            <Typography sx={{ mb: 1.5 }} >
                                                <b>Taken Date : {tDate}</b>
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} >
                                                <b>Retun Date : {rDate}</b>
                                            </Typography>

                                            <Typography sx={{ mb: 1.5 }} >
                                                <b>Current Fine : {wallet}</b>
                                            </Typography>

                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" variant="contained" color="error" onClick={() => ret(resp.id,wallet)}>Retun Book</Button>

                                        </CardActions>
                                    </Card>
                                </Grid>
                            </> 

                        )
                              }else{
                              
                                return (
                                    <>
                                        <Grid container
                                            item xs={12} sm={6} md={3} >
                                            <Card variant="outlined" >
                                                <CardContent>
        
                                                
                                                    <Typography sx={{ mb: 1.5 }}  style={{background:"grey",padding:"9px",borderRadius:"5px",color:"white"}}>
                                                        <b>Current Fine : {wallet}</b>
                                                    </Typography>
        
                                                </CardContent>
                                                
                                             
                                                 
                                                <CardActions>
                                                <Button size="small" variant="contained" color="error" onClick={() => pay(resp.id,wallet)}>Pay</Button>
                                                </CardActions>
                                              
                                              
                                        
                                               
                                            </Card>
                                        </Grid>
                                    </>
       
                                         
                                )
                             
                              }
                    })
                   
                }
             
           
            </Grid>

         <DelPart  del={del} setDel={setDel}/>
        </>
    )
            
}
export default Form;


