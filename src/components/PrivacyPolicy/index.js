import React, { useEffect, useState } from 'react'
import policyContent from "./data.txt"
import { PrivacyPolicyContainer, PrivacyPolicyContent, PrivacyPolicyH1 } from './PrivacyPolicyElements';
const PrivacyPolicy = () => {
  const [content, setContent] = useState("")
  useEffect(() => {
    fetch(policyContent)
      .then(r => r.text())
      .then(text => {
        setContent(text)
      });
  }, [])
  return (
    <PrivacyPolicyContainer id="privacy_policy">
      <PrivacyPolicyH1>Privacy Policy</PrivacyPolicyH1>
      <PrivacyPolicyContent>
        <span dangerouslySetInnerHTML={{ __html: content }}></span>
      </PrivacyPolicyContent>
    </PrivacyPolicyContainer>
  )
}

export default PrivacyPolicy
