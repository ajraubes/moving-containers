import React, { Component } from 'react'
import styled from 'styled-components'

const Contact = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: #000000;
  margin:0;
  background: #b841f4;
  position: absolute;
  width: 100%;
  height: 100%;
  left:0;
`

class ContactUs extends Component {

    render() {
      return (
        <Contact>
            This is contact us
        </Contact>
    )
  }
}

export { ContactUs as default }