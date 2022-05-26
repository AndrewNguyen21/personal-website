import React from 'react'
import {
  H2,
  ToolImage,
  ToolItem,
  Tools,
  ToolsContainer,
  ToolsList
} from './ToolsElements.js'

export const ToolsSection = (props) => {
  return (
    <ToolsContainer tools={props.tools}>
      <Tools>
      <H2>Programming Languages</H2>
      <ToolsList>
      <ToolItem>
        <ToolImage src={require('../../images/HTML-Logo.svg').default} alt='HTML'/>
          HTML
        </ToolItem>
        <ToolItem>
        <ToolImage src={require('../../images/CSS-Logo.svg').default} alt='CSS'/>
          CSS
        </ToolItem>
        <ToolItem>
          <ToolImage src={require('../../images/JS-Logo.svg').default} alt='JS'/>
          Javascript
        </ToolItem>
        <ToolItem>
        <ToolImage src={require('../../images/TS-Logo.svg').default} alt='TS'/>
          Typescript
        </ToolItem>
        <ToolItem>
        <ToolImage src={require('../../images/SASS-Logo.svg').default} alt='SASS'/>
          SASS
        </ToolItem>
      </ToolsList>
      </Tools>
      <Tools>
      <H2>Tools and Technologies</H2>
      <ToolsList>
      <ToolItem>
        <ToolImage src={require('../../images/React-Logo.svg').default} alt='React'/>
          React
        </ToolItem>
        <ToolItem>
        <ToolImage src={require('../../images/NodeJS-Logo.svg').default} alt='NodeJS'/>
          NodeJs
        </ToolItem>
        <ToolItem>
        <ToolImage src={require('../../images/NPM-Logo.svg').default} alt='NPM'/>
          NPM
        </ToolItem>
        <ToolItem>
          <ToolImage src={require('../../images/Angular-Logo.svg').default} alt='Angular'/>
          Angular
        </ToolItem>
        <ToolItem>
        <ToolImage src={require('../../images/Ionic-Logo.svg').default} alt='Ionic'/>
          Ionic
        </ToolItem>
      </ToolsList>
      <ToolsList>
      <ToolItem>
        <ToolImage src={require('../../images/VS-Code-Logo.svg').default} alt='VS Code'/>
          VS Code
      </ToolItem>
      <ToolItem>
        <ToolImage src={require('../../images/Express-Logo.svg').default} alt='Express'/>
          Express
      </ToolItem>
      <ToolItem>
        <ToolImage src={require('../../images/MongoDB-Logo.svg').default} alt='MongoDB'/>
          MongoDB
        </ToolItem>
        <ToolItem>
        <ToolImage src={require('../../images/GraphQL-Logo.svg').default} alt='GraphQL'/>
          GraphQL
        </ToolItem>
        <ToolItem>
        <ToolImage src={require('../../images/Firebase-Logo.svg').default} alt='Firebase'/>
          Firebase
        </ToolItem>
      </ToolsList>
      </Tools>
    </ToolsContainer>
  )
}

export default ToolsSection
