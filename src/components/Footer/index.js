import React from 'react'
import { animateScroll as scroll } from "react-scroll"
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsitePrivacyPolicy, WebsiteRights, WebsiteRightsWrapper } from './FooterElements'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'


const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}><img src={Logo} alt="Wash4Sure" /></SocialLogo>
            <WebsiteRightsWrapper>
              <WebsiteRights>Wash4Sure  © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
              <WebsitePrivacyPolicy to="privacy_policy" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Privacy Policy</WebsitePrivacyPolicy>
            </WebsiteRightsWrapper>
            <SocialIcons>
              <SocialIconLink href="//twitter.com/Wash4S" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="//m.facebook.com/wash4sure/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="//www.linkedin.com/in/wash4sure-pragun-b41a5a152/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
