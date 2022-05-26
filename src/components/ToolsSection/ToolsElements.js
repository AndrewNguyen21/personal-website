import styled from 'styled-components'

export const ToolsContainer = styled.div`
  background: #fbf6ed;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 5rem;
  display: ${({ tools }) => (tools ? '' : 'none')};
`

export const Tools = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;`

export const H2 = styled.h2`
  font-size: 3.5vmin;
  font-weight: 800;
  margin-top: 1.25rem;
  text-align: center;
  `

export const ToolsList = styled.ul`
  margin-top: 1rem;
  list-style: none;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const ToolItem = styled.li`
  color: #111111;
  font-weight: bold;
  line-height: 3;
  font-size: 1rem;
  padding-left: 3rem;
`
export const ToolImage = styled.img`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  top: 14px;
  right: 10px;
`