import React from 'react'
import { ContentDescription, ContentTag } from '../styles/content.styles'

const ContentDescriptionComponent = () => {

  return (
    <ContentDescription>
      <ContentTag>Time</ContentTag>
      <ContentTag>LineRef</ContentTag>
      <ContentTag>Origin</ContentTag>
      <ContentTag>Via</ContentTag>
      <ContentTag>Destination</ContentTag>
      <ContentTag>Bay</ContentTag>
    </ContentDescription>
  )
}

export default ContentDescriptionComponent