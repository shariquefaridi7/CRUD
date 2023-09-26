import { Box, Button, TextField, Card, CardContent, CardActions, Typography, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import axios from 'axios';



const Form = () => {

    const [data, setData] = useState({
        name: "",
        phone: ""
    });

    const [info, setInfo] = useState([]);

    const submit = async () => {

        console.log(data.name, data.phone);
        await axios.post("http://localhost:4000/form/post-data", data);

        setData(() => {
            return {
                name: "",
                phone: ""
            }

        })
        const res = await axios.get("http://localhost:4000/form/get-data");

        setInfo(res.data)
        console.log(info)

    }

    // change for inputs
    const change = (e) => {

        setData((pre) => {
            if (e.target.name == "name") {
                return {
                    name: e.target.value,
                    phone: pre.phone
                }

            } else {
                return {
                    name: pre.name,
                    phone: e.target.value
                }
            }
        })
    }

    // delete particular info

    const del = async (id) => {
        console.log(id)
        await axios.delete(`http://localhost:4000/form/delete-data/${id}`);


        //call get 
        const res = await axios.get("http://localhost:4000/form/get-data");

        setInfo(res.data)

    }

    // edit data

    const update = (resp) => {

        setData(() => {
            return {
                name: resp.name,
                phone: resp.phone
            }
        })

        del(resp.id)
    }


    useEffect(() => {
        async function fetch() {
            const res = await axios.get("http://localhost:4000/form/get-data");

            setInfo(res.data)

        }
        fetch();
    }, [])

    return (
        <>
            <center>
            <Typography variant='h4' marginTop= {2.5} ><i>Booking App</i></Typography>
                <Box
                    sx={{ width: 200, height: 150, border: "1px solid black", padding: 6, borderRadius: 2, marginTop: 4}}>
                      
                    <TextField label="Name" variant="outlined" size="small" name="name" onChange={change} value={data.name} /> <br /><br />
                    <TextField label="PhoneNo" variant="outlined" size="small" name="phone" onChange={change} value={data.phone} /><br /><br />
                    <Button variant="contained" color="success" size="small" onClick={submit}>Submit</Button>

                </Box>


            </center>
<br/><br/>
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
                                            <b> Name :   {resp.name}</b>
                                        </Typography>

                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            <b>Phone : {resp.phone}</b>
                                        </Typography>

                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" variant="contained" color="error" onClick={() => del(resp.id)}>Delete</Button>
                                        <Button size="small" variant="contained" color="primary" onClick={() => update(resp)}>Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </>

                    )
                })

            }

</Grid>



        </>
    )

}
export default Form;
