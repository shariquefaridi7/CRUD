import { Typography, TextField, Button,Grid ,Card,CardContent,CardActions} from "@mui/material";
import { useState, useEffect } from "react";
import axios from 'axios';



const Form = () => {

    const [data, setData] = useState("");
    const [info, setInfo] = useState("");

    const submit = async () => {

   
        let info = await axios.post("http://localhost:4000/post-data", { name:data });
        console.log(info);
        setData("");
        const res = await axios.get("http://localhost:4000/get-data");
        console.log(res.data);
        setInfo(res.data);

    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:4000/get-data");
            console.log(res.data);
            setInfo(res.data);
        }
        fetchData();
    }, [])

    let wallet = 0; // Initialize your wallet with 0 rupees

    // Function to increment wallet by 10 rupees
    const increaseWallet = () => {
      wallet += 10;
      console.log(`Your wallet now has ${wallet} rupees.`);
    };
    
    // Set up a timer to call increaseWallet every hour (in milliseconds)
    const intervalInMilliseconds = 3600000; // 1 hour = 60 minutes * 60 seconds * 1000 milliseconds
    
    // Call increaseWallet immediately (for the first time)
    increaseWallet();
    
    // Set up a recurring timer to call increaseWallet every hour
   const val= setInterval(increaseWallet, intervalInMilliseconds);

   const ret=()=>{
    
   }

    return (
        <>
        <div  style={{ paddingTop: "50px",border:"1px  solid black",marginTop:"100px",marginLeft:"500px",marginRight:"500px",paddingBottom:"30px"}}> 
<center>
          
            <TextField id="outlined-basic" label="BookName" variant="outlined" size="small" onChange={(e) => setData(e.target.value)} value={data} /><br /><br />
            <Button variant="contained" size="small" onClick={submit}>Send</Button>
            </center>


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
                                                <b>Takken Date : {resp.createdAt}</b>
                                            </Typography>

                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                <b>Return Date : {resp.createdAt.setHours(resp.createdAt.getHours()+1)}</b>
                                            </Typography>

                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                <b>Current Fine : {val}</b>
                                            </Typography>

                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" variant="contained" color="error" onClick={() => ret(resp.id)}>Retun Pay</Button>
                                           
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </>

                        )
                    })

                }

            </Grid>

            </div>
        </>
    )
}
export default Form;


