import React, { Component } from 'react'
// import StaticBlocks from './StaticBlocks'
import ResponsiveLayout, { layoutSizesEnum } from './responsivelayout'
import styled from 'styled-components'

const Title = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: #ffffff;
  margin:0;
`

const Box1 = styled.div`
  background: #4286f4;
`

const Box2 = styled.div`
  background: #b841f4;
`

const Box3 = styled.div`
  background: #f44167;
`

const Box4 = styled.div`
  background: #76f441;
`

const Midbox = styled.div`
  width: 60%;
  float: left;
  height: 100%
`

const Desktop = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  left:0;
  top:0;
  ${Box1} {
    height: 100%;
    width: 20%;
    float: left;
  }
  ${Box2} {
    height: 60%;
  }
  ${Box3} {
    height: 40%;
  }
  ${Box4} {
    height: 100%;
    width: 20%;
    float: left;
  }
`

const Rightbox = styled.div`
  width: 70%;
  float: left;
  height: 100%;
`

const Tablet = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  left:0;
  top:0;
  ${Box1} {
    height: 100%;
    width: 30%;
    float: left;
  }
  ${Box2} {
    height: calc((100% / 3) - 0.1px);
  }
  ${Box3} {
    height: calc((100% / 3) - 0.1px);
  }
  ${Box4} {
    height: calc((100% / 3) - 0.1px);
  }
`

const Mobile = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  left:0;
  top:0;
  ${Box1} {
    height: 80px;
  }
  ${Box2} {
    height: 300px;
  }
  ${Box4} {
    height: 300px;
  }
`

class HomePageLayout extends Component {

  render() {
    return (
      <ResponsiveLayout>
        {(size) => {
          if (size === layoutSizesEnum.MOBILE) {
            return this.renderMobile()
          } else if (size === layoutSizesEnum.TABLET) {
            return this.renderTable()
          } else {
            return this.renderDesktop()
          }
        }}
      </ResponsiveLayout>
    )
  }

  renderDesktop() {
    return (
      <Desktop>
        <Box1>
          <Title>box1</Title>
        </Box1>
        <Midbox>
          <Box2>
            <Title>box2</Title>
          </Box2>
          <Box3>
            <Title>box3</Title>
          </Box3>
        </Midbox>
        <Box4>
          <Title>box4</Title>
        </Box4>
      </Desktop>
    )
  }

  renderTable() {
    return (
      <Tablet>
        <Box1>
          <Title>box1</Title>
        </Box1>
        <Rightbox>
          <Box2>
            <Title>box2</Title>
          </Box2>
          <Box3>
            <Title>box3</Title>
          </Box3>
          <Box4>
            <Title>box4</Title>
          </Box4>
        </Rightbox>
      </Tablet>
    )
  }

  renderMobile() {
    return (
      <Mobile>
        <Box1>
          <Title>box1</Title>
        </Box1>
        <Box2>
          <Title>box2</Title>
        </Box2>
        <Box4>
          <Title>box4</Title>
        </Box4>
      </Mobile>
    )
  }
}

export { HomePageLayout as default }
