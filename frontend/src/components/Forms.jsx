import React,{useState} from 'react';
import {Container,Box,Toolbar,Typography,Button,Paper,Avatar,TextField,Grid} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import useStyle from  "./style"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  
  const navigate=useNavigate();

    const [form,setForm]=useState({author:"",title:"", content:""});

    const handleChange=(e)=>setForm({...form,[e.target.name]:e.target.value});
    console.log(form)
    const classes = useStyle();


    const handleSubmit= async(e)=>{
    e.preventDefault();
    const res=await axios.post("http://localhost:5003/post/create",form);
      console.log(res);
      
    }


  return (
  <Container maxWidth="xs" main="component">
   <Paper elevation={3} className={classes.paper} >
   <Avatar  className={classes.avatar}>
          <LockIcon />
        </Avatar>

        <Typography variant='h5' component="h1" sx={{mb:6}}>Blog</Typography>
        <Grid container direction={"column"} spacing={2}>
  <Grid item>
    <TextField label="Author" variant="outlined"  name="author" fullWidth  onChange={handleChange}/>
  </Grid>
  <Grid item>
    <TextField label="Title" variant="outlined"  name="title" fullWidth onChange={handleChange} />
  </Grid>
  <Grid item>
    <TextField label="Content" variant="outlined"  name="content" fullWidth  onChange={handleChange} />
  </Grid>
  <Grid item  sx={{display:"flex" ,justifyContent:"center"}}>
    <Button onClick={handleSubmit}>Submit</Button>
  </Grid>
</Grid>
   </Paper>
  </Container>
  )
}

export default Form;