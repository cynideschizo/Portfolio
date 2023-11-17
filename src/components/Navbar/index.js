import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/Home'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <Span>Naufaldi.</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#home">Home</NavLink>
          <NavLink href='#mentorship'>Mentorship</NavLink>
          <NavLink href='#portfolio'>Portfolio</NavLink>
          <NavLink href='#snippet'>Snippet</NavLink>
          <NavLink href='#blog'>Blog</NavLink>
        </NavItems>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#Home" onClick={() => {
              setIsOpen(!isOpen)
            }}>Home</MobileLink>
            <MobileLink href='#Mentorship[' onClick={() => {
              setIsOpen(!isOpen)
            }}>Mentorship</MobileLink>
            <MobileLink href='#Portfolio' onClick={() => {
              setIsOpen(!isOpen)
            }}>Portfolio</MobileLink>
            <MobileLink href='#Snippet' onClick={() => {
              setIsOpen(!isOpen)
            }}>Snippets</MobileLink>
            <MobileLink href='#Blog' onClick={() => {
              setIsOpen(!isOpen)
            }}>Blogs</MobileLink>
            
          </MobileMenu>
        }
        
      </NavbarContainer>
      
      
    </Nav>
    
  )
}

export default Navbar