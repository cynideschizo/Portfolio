import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from '../Projects/ProjectsStyle'
import SnippetCards from '../Cards/SnippetCards'
import { snippets } from '../../data/constants'


const Snippets = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="snippet">
      <Wrapper>
        <Title>Code Snippets</Title>
        <Desc>
        </Desc>
        <CardContainer>
          {toggle === 'all' && snippets
            .map((snippets) => (
              <SnippetCards snippets={snippets} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {snippets
            .filter((item) => item.category === toggle)
            .map((snippets) => (
              <SnippetCards snippets={snippets} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Snippets