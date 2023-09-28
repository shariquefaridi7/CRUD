import React,{useState,useEffect} from 'react';
import {Container,Box,Button,Paper,TextField,Stack} from '@mui/material';
import useStyle from  "./style"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const Blog = () => {
const [comment,setComment]=useState("");
const [post,setPost]=useState([]);
const [resComment,setResComment]=useState([]);

  useEffect(()=>{
    const fetchBlog= async()=>{
      const res=await axios.get("http://localhost:5003/post");
      console.log(res);
      setPost(res.data);
    }

    fetchBlog();
  },[]);


  const handleDelete= async(id)=>{
    try {
      const res=await axios.delete(`http://localhost:5003/comment/delete/${id}`);
      console.log(res);
      fetchComment();

  } catch (error) {
       
      console.log(error);
  }
  }


  const handleSubmit= async(e)=>{
  e.preventDefault();
  const res=await axios.post("http://localhost:5003/comment/create",{comment});
  console.log(res);
  fetchComment();
  }


  const fetchComment= async()=>{
    const res=await axios.get("http://localhost:5003/comment");
    console.log(res);
    setResComment(res.data);
  }

  useEffect(()=>{
    const fetchComment= async()=>{
      const res=await axios.get("http://localhost:5003/comment");
      console.log(res);
      setResComment(res.data);
    }

    fetchComment();
  },[]);

  const classes = useStyle();
    
  const navigate=useNavigate();
  console.log(resComment)

  return (
    <Container maxWidth="xs" main="component">
    <Paper elevation={3} className={classes.paper} >

      {post.map((data,index)=>(
        <>
         <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        
        >
          <Typography>{data.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Stack  spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
           <Stack spacing={{ xs: 1, sm: 2 }} direction="col" useFlexGap flexWrap="wrap">
            <Typography>Author</Typography>
            <Typography>{data.author}</Typography>
           </Stack>
           <Typography>{data.content}</Typography>
            <Stack  spacing={{ xs: 1, sm: 2 }} direction="col" useFlexGap flexWrap="wrap">
              <Typography>Comments</Typography>
              <TextField label="Content" variant="outlined"  name="comment" fullWidth  onChange={(e)=>setComment(e.target.value)}/>
              <Button variant="contained" onClick={handleSubmit}>Send</Button>
            </Stack>
       {resComment && 
       
         resComment.map((data,index)=>(
          <TableContainer component={Paper} >
          <Table  aria-label="simple table">
          <TableBody>
     
         <TableRow
        
           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
         >
           <TableCell component="th" scope="row">
             <Typography>{data.comment}</Typography>
           </TableCell>
           <TableCell align="right"><Button variant='contained' size='small' onClick={(e)=>handleDelete(data.id)}>Delete</Button></TableCell>
         </TableRow>
     
     </TableBody>
          </Table>
         </TableContainer>
         ))
       }
        
           
        </Stack>
        </AccordionDetails>
      </Accordion></>
      ))}
   
    </Paper>
   </Container>
  )
}

export default Blog