import styled from "styled-components"

export const PricingContainer = styled.div`
  background: #d8d8d8;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`
export const PricingTopLine = styled.p`
  color: #008ed6;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  padding-bottom: 16px;
`

export const PricingWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  } 
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  } 
`

export const PricingCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const PricingIcon = styled.div`
  /* margin-bottom: 10px; */
`

export const PricingH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 48px;
  
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const PricingH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  text-transform: uppercase;
`
export const PricingDetails = styled.div`
  display: flex;
  flex-direction: column;
  
  span {
    vertical-align: "sub";
    font-size: 2rem;
  }
`

export const PricingP = styled.p`
  font-size: 0.9rem;
  text-align: justify;
`
