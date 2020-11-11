import React from 'react'
import { AppDownloadButton, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroH5 } from './HeroSectionElements'

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg />
      <HeroContent>
        <HeroH5>
          Introducing wash4sure app
        </HeroH5>
        <HeroH1>
          Door Step Car Wash Service, <br />
          Monthly and One time Packages.
        </HeroH1>
        <HeroBtnWrapper>
          <AppDownloadButton playstore target="_blank"
            rel="noopener" href="https://play.google.com/store/apps/details?id=com.wash4sure&hl=en" />
          <AppDownloadButton appstore target="_blank"
            rel="noopener" href="https://itunes.apple.com/us/app/wash4sure/id1309035247?mt=8&ign-mpt=uo%3D4" />
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
