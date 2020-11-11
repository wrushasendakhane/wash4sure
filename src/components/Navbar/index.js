import React, { Fragment, useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa"
import { animateScroll as scroll } from "react-scroll"
import { Nav, NavbarContainer, NavItem, NavLink, NavLogo, NavMenu, MobileIcon, NavBtn, NavBtnLink } from './NavbarElements'
import Logo from "../../assets/logo.png"

const Navbar = ({ isOpen, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <Fragment>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src={Logo} alt="Wash4Sure" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="why" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Why Us?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="pricing" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Pricing Packages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Contact</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink to="signup">Sign Up</NavLink>
            </NavItem> */}
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to="/">Sign In</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </Fragment>
  )
}

export default Navbar
