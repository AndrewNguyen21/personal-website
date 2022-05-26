import React from 'react'
import {
  Card,
  CardLink,
  CardLabel,
  CardImage,
  CardDetails,
  CardH5,
} from './ProjectElements'

const ProjectCard = ({
  img,
  alt,
  detail,
  label,
  href,
}) => {
  return(
    <>
      <Card>
        <CardLink href={href} target="_blank" rel="noopener noreferrer">
          <CardLabel data-category={label}>
            <CardImage alt={alt} src={img}>
            </CardImage>
          </CardLabel>
          <CardDetails>
            <CardH5>
              {detail}
            </CardH5>
          </CardDetails>
        </CardLink>
      </Card>
    </>
  )
}

export default ProjectCard