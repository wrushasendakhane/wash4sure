import styled from "styled-components"

export const PrivacyPolicyContainer = styled.div`
  background: #d8d8d8;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* padding: 0 30px; */
  height: 800px;
  position: relative;
  overflow-y: auto;
  z-index: 1;
`

export const PrivacyPolicyContent = styled.div`
  display: flex;
  margin-top: 80px;
  max-width : 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
`
export const PrivacyPolicyH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 48px;
  
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`