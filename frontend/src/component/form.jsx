import { Typography, TextField, Button, Grid, Card, CardContent, CardActions } from "@mui/material";
import { useState, useEffect } from "react";
import axios from 'axios';
import DelPart from "./delPart";





const Form = () => {

    const [data, setData] = useState("");
    const [info, setInfo] = useState([]);
    const [del,setDel]=useState([]);
    const [change,setChange] =useState(true);

    const submit = async () => {
       


         await axios.post("http://localhost:4000/data", { name: data});
        
        setData("");
        const res = await axios.get("http://localhost:4000/data");
        console.log(res.data);
        setInfo(res.data);

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
        await axios.delete(`http://localhost:4000/data/${id}/${amount}`);
        const res = await axios.get("http://localhost:4000/data");
        setInfo(res.data);
        const resp= await axios.get("http://localhost:4000/delPart/get-data");
         setDel(resp.data);

    }else {
        
         setChange(false);
      
    }
}

const finaldelt=async(id,amount)=>{
    await axios.delete(`http://localhost:4000/data/${id}/${amount}`);
    const res = await axios.get("http://localhost:4000/data");
    setInfo(res.data);
    const resp= await axios.get("http://localhost:4000/delPart/get-data");
     setDel(resp.data);
}


useEffect(() => {
    const fetchData = async () => {
        const res = await axios.get("http://localhost:4000/data");
        setInfo(res.data);
        const resp= await axios.get("http://localhost:4000/delPart/get-data");
        setDel(resp.data);

    }
    fetchData();
}, [])


    return (
        <>
            <div style={{ paddingTop: "30px", border: "1px  solid black", marginTop: "50px", marginLeft: "500px", marginRight: "500px", paddingBottom: "20px" }}>
                <center>

                    <TextField id="outlined-basic" label="Book Name" variant="outlined" size="small" onChange={(e) => setData(e.target.value)} value={data} /><br /><br />
                    <Button variant="contained" size="small" onClick={submit}>Submit</Button>
                </center>

            </div>
            <br /><br />
            <Grid
                container
                spacing={4}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                paddingLeft={10}
            >
                {
                    info.map((resp) => {
                        const currentDate = new Date();
                        let wallet = 0
                        const createdDate = resp.createdAt;  
                        let returndate = new Date(createdDate);
                        const tDate=changeFormat(returndate);
                        const diffHrs = Math.abs(currentDate.getHours() - returndate.getHours());
                        console.log(diffHrs)
                        if (diffHrs != 0) {
                            wallet = 10 * diffHrs;

                        }

                        returndate.setHours(returndate.getHours() + 1);
                       const rDate =changeFormat(returndate)
                      


                              if(change){
                        return (
                            <>
                                <Grid container
                                    item xs={12} sm={6} md={3} >
                                    <Card variant="outlined" >
                                        <CardContent>

                                            <Typography component="div">
                                                <b>Book Name :   {resp.name}</b>
                                            </Typography>

                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                <b>Taken Date : {tDate}</b>
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                <b>Retun Date : {rDate}</b>
                                            </Typography>

                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                <b>Current Fine : {wallet}</b>
                                            </Typography>

                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" variant="contained" color="error" onClick={() => ret(resp.id,wallet)}>Retun Pay</Button>

                                        </CardActions>
                                    </Card>
                                </Grid>
                            </>

                        )
                              }else{
                                setChange(true); 
                                return (
                                    <>
                                        <Grid container
                                            item xs={12} sm={6} md={3} >
                                            <Card variant="outlined" >
                                                <CardContent>
        
                                                
                                                    <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{background:"white"}}>
                                                        <b>Current Fine : {wallet}</b>
                                                    </Typography>
        
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small" variant="contained" color="error" onClick={() => finaldelt(resp.id,wallet)}>Pay</Button>
        
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    </>
       
                                         
                                )
                             
                              }
                    })
                   
                }
             
           
            </Grid>

         <DelPart  del={del}/>
        </>
    )
            
}
export default Form;


