import styled from "styled-components";

export const ContactContainer = styled.div`
  background: #f9f9f9;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  @media screen and (max-width: 768px) {
    height: 1100px;
    padding: 100px 0;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
    padding: 100px 0;
  }
`

export const ContactTopLine = styled.p`
  color: #008ed6;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  padding-bottom: 16px;
`
export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 48px;
  
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContactType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`

export const ContactLogo = styled.div`

`

export const ContactContent = styled.p`
`

export const GoogleMapContainer = styled.div`
  display:inline-block; 
  position:relative; 
  height: 350px;
  width:80%;
`

export const GoogleMap = styled.div`
  position:absolute; 
  top:0; 
  bottom:0; 
  left:0; 
  right:0;
`