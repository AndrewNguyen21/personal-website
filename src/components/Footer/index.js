import React from 'react'
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoIosLaptop } from 'react-icons/io'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {

  const scrollTop = () => {
    scroll.scrollToTop();
  }
  
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'><IoIosLaptop onClick={scrollTop}/></SocialLogo>
            <WebsiteRights>
              Andrew Nguyen © {new Date().getFullYear()}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='//www.linkedin.com/in/andrew-nguyen-/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href='//github.com/AndrewNguyen21'
                target='_blank'
                aria-label='Github'
              >
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
