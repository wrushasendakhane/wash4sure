import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarMenu, SidebarLink, SidebarRoute, SidebarWrapper, SideBtnWrapper } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
          <SidebarLink to="why" onClick={toggle}>Why Us?</SidebarLink>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="pricing" onClick={toggle}>Pricing Packages</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
        </SidebarMenu>
        {/* <SideBtnWrapper>
          <SidebarRoute>
            Sign In
          </SidebarRoute>
        </SideBtnWrapper> */}
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
