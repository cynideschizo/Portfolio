import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import './service.css'
import { Typography } from '@mui/material';







const Imgg = styled('img')({
  margin:'auto',
  display:'flex',
  flexDirection:'row',
  maxWidth:'100%',
  maxHeight:'100%',
  border: '2px solid  ' ,
  borderColor:'#62D9FF',
  borderRadius:'80px',
  
});

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;




  


const Service = () => {

   
       
 
return(

    <div className='g2' id="mentorship">

      <div className='i1'>
        <h2 style={{color:'#FFFFFF'}}>What do I do </h2>
        <p style={{color:"#D6D6D6", fontSize:"20px",}}>Build and maintain websites, frontend dev also have a mentorship called MOFON. My motto is Beauty and function in equal measure as priority.</p>

      </div>
      <div className='i2' >
    

      <Box 
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection:'row',

       
        '& > :not(style)': {
          m:3,
          width: 220,
          height: 200,
          justifyContent:'center',
          alignItems:'center',
          textAlign:'center',
        
        },
      }}
    >

      <Paper   style={{backgroundColor:"#323443", alignItems:"center", justifyContent:"center"} }><h3 style={{color:"#FFFFFF"}}><br/>  Web Development</h3> <p style={{color:"#EFEDE8A6"}}>You will receive a customized plan for your fitness journey, and lots of support.</p></Paper>
      <Paper   style={{backgroundColor:"#323443", alignItems:"center", justifyContent:"center"} }><h3 style={{color:"#FFFFFF"}}><br/>  UX Research</h3><p style={{color:"#EFEDE8A6"}}>You will receive a customized plan for your fitness journey, and lots of support.</p></Paper>
    </Box>
     
          
      </div>
    
    </div>

    
   
  )
}

export default Service