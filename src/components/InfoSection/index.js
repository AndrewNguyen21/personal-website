import React from 'react'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  SocialWrap,
  SocialIconLink,
  BtnWrap,
  Button,
  ImgWrap,
  Img,
} from './InfoElements'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import ToolsSection from '../ToolsSection'


const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  buttonTo,
  img,
  alt,
  primary,
  dark,
  dark2,
  social,
  tools,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <SocialWrap social={social}>
                  <SocialIconLink
                    href='//www.linkedin.com/in/andrew-nguyen-/'
                    target='_blank'
                    aria-label='LinkedIn'
                  >
                    <FaLinkedin />
                  </SocialIconLink>
                  <SocialIconLink
                    href='https://github.com/AndrewNguyen21'
                    target='_blank'
                    aria-label='Github'
                  >
                    <FaGithub />
                  </SocialIconLink>
                </SocialWrap>
                <BtnWrap>
                  <Button
                    to={buttonTo}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <ToolsSection tools={tools}/>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
