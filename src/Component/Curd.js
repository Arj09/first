import React, { useEffect, useState } from 'react';
import { Http } from './Http';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu , MenuItem} from '@mui/material';
import styled from '@emotion/styled';
import { Box, Fab, IconButton, Tooltip, Typography, Modal } from "@mui/material";
import "./Curd.css"
import { useNavigate } from 'react-router-dom';

import axios from 'axios';



export const Curd = ()=>{

    const [data, setData]= useState([])
    const [open, setOpen] = useState(false)
    const [buttonshow, setButtonshow] = useState(false)
    const navigate = useNavigate()
    const [update, setUpdate] = useState()

    const [id, setID] = useState()
    const st = "none"

    

    

    const Pop = styled("ul")({
        display:"flex",
        width:"5%",
        height:"10%",
        flexDirection:"column",
        backgroundColor:"blue",
        color:"white",
        listStyle:"none",
        textAlign:"center",
        position:"absolute",
        marginRight:"50px"

    })
    const handleid = (id)=>{
      setID(id)
      setButtonshow(true)
      console.log(id)

    }

    const handleEdit = (id)=>{
      localStorage.setItem('ID', id)
      navigate("/edit")

    }
    const handleView = (id)=>{
      
    }
    const handleDelet = (id)=>{
      Http.delete(`/DeliveryBoy/delete-Employee/${id}`).then((res)=>{
        console.log(res.data)
        setUpdate(update=>update+1)
      }).catch((err)=>{
        console.log(err)
      })
      
    }
    useEffect(()=>{
      Http.get("/DeliveryBoy/Get-Employee").then((res)=>{
          console.log(res.data)
          setData(res.data)
      }).catch((err)=>{
          console.log(err)
          
      })
  }, [update])


    return(
        <>
        

    <TableContainer component={Paper} sx={{width:"80%", margin:"10px auto"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead sx={{textAlign:"center"}}>
          <TableRow  >
            <TableCell  sx={{textAlign:"center"}}>Fullname</TableCell>
            <TableCell sx={{textAlign:"center"}} align="right">DOB</TableCell>
            <TableCell  sx={{textAlign:"center"}}align="right">StartDate</TableCell>
            <TableCell sx={{textAlign:"center"}}  align="right">EndDate</TableCell>
            <TableCell sx={{textAlign:"center"}}  align="right">Description</TableCell>
            <TableCell sx={{textAlign:"center"}}  align="right"> </TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody sx={{position:"relative"}}>
          {data.map((data,index) => (
            <TableRow
              key={index}
              
            >
              <TableCell component="th" scope="row" sx={{textAlign:"center"}}>
              {data.FirstName+" "}{data.LastName}
              </TableCell>
              <TableCell sx={{textAlign:"center"}} align="right">{data.DOB}</TableCell>
              <TableCell sx={{textAlign:"center"}} align="right">{data.StartDate}</TableCell>
              <TableCell sx={{textAlign:"center"}} align="right">{data.EndDate}</TableCell>
             
              <TableCell sx={{textAlign:"center"}} align="right" >{data.Description}</TableCell>
              <TableCell sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"row", position:"relative"}} align="right" onClick={()=>handleid(index)}>
                <MoreVertIcon/>
                <ul className={ buttonshow && id == index ? "pop": "pop1"} style={{listStyle:"none", backgroundColor:"blue", border:"0.2px solid blue", color:"white", position:"absolute"}} >
                  <li className='line' onClick={()=>handleView(data.id)}>View</li>
                  <li className='line' onClick={()=>handleEdit(data.id)}>Edit</li>
                  <li className='line' onClick={()=>handleDelet(data.id)}>Delete</li>
                </ul>
              </TableCell>
            </TableRow>
            
          ))}
          
        </TableBody>
        
      </Table>
     
      
    </TableContainer>

   




        </>
    )

}