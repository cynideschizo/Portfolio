import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid';
import { snippets } from '../../data/constants';
import Snippets from '../Snippet';


const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
const Card = styled.div`
    width: 700px;
    max-height: 320px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);

    padding: 16px 10px;
   
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
`
const Techs = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`


const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`



const SnippetCards = ({snippets,setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, snippets: snippets})}>
          
           
           

                <Grid container direction="row">
                   
                    <Grid item xs={12} container direction="column" spacing={1} paddingLeft={5}>
                    <Details>
                        <Title>{snippets.title}</Title>
                       
                        <Description>{snippets.description}</Description>
                    </Details>
                    
                    </Grid>
                   

                
                <Grid item  container direction="row" margin={3} >
                   
                    </Grid>
                    <Grid item paddingLeft={2}>
                    <Techs >
                        {snippets.techs?.map((techs) => (
                            <Avatar src={techs.image}/>
                        ))}
                    </Techs> 
                        
                    </Grid>
                    

                    </Grid>
                    

           

            
        </Card>
    )
}

export default SnippetCards