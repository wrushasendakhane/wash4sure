import React from 'react'
import { FaRupeeSign } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { pricingPackages } from './data'
import { PricingCard, PricingContainer, PricingTopLine, PricingH1, PricingH2, PricingIcon, PricingP, PricingWrapper, PricingDetails } from './PricingElements'

const Pricing = () => {
  return (
    <PricingContainer id="pricing">
      <PricingTopLine>Quality has its price</PricingTopLine>
      <PricingH1>
        Pricings & Plans
      </PricingH1>
      <PricingWrapper>
        {pricingPackages.map((item, index) => (<PricingCard key={index}>
          <IconContext.Provider value={{ color: "#008ed6", verticalAlign: 'middle', size: "2rem" }}>
            <PricingIcon>{item.icon}</PricingIcon>
          </IconContext.Provider>
          <PricingH2>{item.heading}</PricingH2>
          <PricingDetails> <p><IconContext.Provider value={{ color: "#000", size: "1rem", verticalAlign: "middle" }}><FaRupeeSign /></IconContext.Provider><span>{item.cost}</span> </p> {item.heading.startsWith("Monthly") ? <div>/Per Month</div> : null}</PricingDetails>
          <PricingP>{item.description}</PricingP>
        </PricingCard>
        ))}
      </PricingWrapper>
    </PricingContainer>
  )
}

export default Pricing
