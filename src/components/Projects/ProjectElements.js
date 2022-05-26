import styled from 'styled-components'

export const ProjectsSection = styled.div`
  padding: 4rem;
  background: #121212;
`

export const ProjectsH1 = styled.h1`
  text-align: center;
  color: #fff
`

export const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`

export const ProjectsWrapper = styled.div`
  position: relative;
  margin: 50px 0 45px; 
`

export const CardsSection = styled.ul`
  margin-bottom: 24px;

  @media only screen and (min-width: 1024px) {
    display: flex;
  }
`

export const Card = styled.li`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;
  background: #fff;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 2rem;
  }
`

export const CardLink = styled.a`
  display: flex;
  flex-flow: column;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`

export const CardLabel = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 67%;
  overflow: hidden;

  &::after{
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #b5b35c;
    box-sizing: border-box;
  }
`

export const CardImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`

export const CardDetails = styled.div`
  padding: 20px 30px 30px;
`

export const CardH5 = styled.h5`
  color: #252e48;
  font-size: 18px;
  line-height: 24px;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`



