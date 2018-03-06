import React, { Component } from 'react'
import styled from 'styled-components'

const About = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: #000000;
  margin:0;
  position: absolute;
  width: 100%;
  height: 100%;
  left:0;
`

class AboutUs extends Component {

    render() {
      return (
        <About>
            This is about us
        </About>
    )
  }
}

export { AboutUs as default }