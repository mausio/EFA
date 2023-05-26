import {
  Content,
  Gitter,
  MainContainer,
} from '../styles/main.styles'
import React from 'react'
import DescriptionComponent from './description.component'
import HeaderComponent from './header.component'
import ContentDescriptionComponent from './content-description.component'
import ContentComponent from './content.component'
import ConfigComponent from './config.component'

const MainComponent = () => {

  return (
    <MainContainer>
      <DescriptionComponent />
      <HeaderComponent />
      <ContentDescriptionComponent />
      <Content>
          <Gitter>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </Gitter>
        <ContentComponent />
      </Content>
      <ConfigComponent />
    </MainContainer>
  )
}

export default MainComponent