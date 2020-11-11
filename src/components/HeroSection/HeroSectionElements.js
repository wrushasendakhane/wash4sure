import styled, { css } from "styled-components";
import backgroundImg from "../../assets/images/background.jpg"
import appstoreImg from "../../assets/images/appstore.png";
import playstoreImg from "../../assets/images/playstore.png";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`

export const HeroBg = styled.div`
  position: absolute;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${backgroundImg});
  /* Position and center the image to scale nicely on all screens */
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;
  /* position: relative; */
  /* background: url("images/background.jpg") center center/cover no-repeat; */
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  object-fit: cover;
`

export const HeroContent = styled.div`
  display: flex;
  margin-top: 80px;
  max-width : 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 36px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`
export const HeroH5 = styled.h5`
  margin-top: 24px;
  color:#008ed6;
  font-size: 18px;
  text-align: left;
  max-width: 600px;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size:12px;
  }
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  width: 300px;
  height: 200px;
`
export const AppDownloadButton = styled.a`
  width: 250px;
  height: 100px;
  ${props => props.appstore && css`
    background-image: url(${appstoreImg});
  `}
  ${props => props.playstore && css`
    background-image: url(${playstoreImg});
  `}
  background-position: center; 
  background-repeat: no-repeat;
  background-size: contain;

  &:hover {
    cursor: pointer;
  }
`