import React from 'react'
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoSectionElements'

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, img, alt }) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darkText={darkText} dangerouslySetInnerHTML={{ __html: description }} />
              {/* <BtnWrap>
                <Button to="home"></Button>
              </BtnWrap> */}
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
