import React from 'react'
import { 
  ProjectsSection, 
  ProjectsH1,
  ProjectsContainer,
  ProjectsWrapper,
  CardsSection,
} from './ProjectElements'
import ProjectCard from './Card'
import {
  FoodMood,
  SocialMedia,
  Weather,
  PomodoroClock,
  Giphy,
} from './Data'

export const Projects = () => {
  return (
    <>
      <ProjectsSection id='projects'>
        <ProjectsH1>Check out these projects!</ProjectsH1>
        <ProjectsContainer>
          <ProjectsWrapper>
            <CardsSection>
              <ProjectCard {...FoodMood}/>
              <ProjectCard {...SocialMedia}/>
            </CardsSection>
            <CardsSection>
              <ProjectCard {...Weather}/>
              <ProjectCard {...PomodoroClock}/>
              <ProjectCard {...Giphy}/>
            </CardsSection>
          </ProjectsWrapper>
        </ProjectsContainer>
      </ProjectsSection>
    </>
  )
}

export default Projects