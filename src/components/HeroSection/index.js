import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { Box, withStyles } from '@mui/material';

import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { Rowing } from '@mui/icons-material';

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
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  

const HeroSection = () => {
    return (
        
        <div id="home">

            <Grid container direction={"row"} spacing={2}  >
                <Grid item xs={8} md={12} container direction={"row"}>
                    <item>
                    <HeroContainer>
                        <HeroBg>
                            <HeroBgAnimation />
                        </HeroBg>
                      
                          <TextLoop>
                           
                            Hi Im Naufaldi, a special human with some ability to love learning and working on teamwork.
                            
                            </TextLoop>
                    </HeroContainer>
                    </item>
                </Grid>

            </Grid>
            
        </div>
    )
}

export default HeroSection