import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'
import HeroImg from '../../images/HeroImage.jpg'

import './bio.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';



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













const Biography = () => {
  return (
 


    <div className='g1'>

      <div className='item1'>
        <bg>
            <Imgg src={HeroImg}></Imgg>
        </bg>
      </div>
      <div className='item2'>
          <h1 style={{color:"#FFFFFF"}}>Biography</h1>
          <p style={{color:"#D6D6D6", fontSize:"20px",}}>Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Exicited on React, UX Research and Agile.</p>
                    
      </div>
      <div className='item3'>
          <div className='social'>
            <div className='sochead'>
                <h1 style={{color:"#FFFFFF"}}>Lets Connect</h1>
            </div>

            <div className='solin' >
              <div className='insta'>
              <SocialMediaIcons>
                <SocialMediaIcon href={Biography.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
                <SocialMediaIcon href={Biography.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
                <SocialMediaIcon href={Biography.insta} target="display"><InstagramIcon /></SocialMediaIcon>
              </SocialMediaIcons>
              </div>
            </div>

          </div>
      </div>
    </div>

    
   
  )
}

export default Biography