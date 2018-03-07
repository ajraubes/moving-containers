import React, { Component } from 'react'
import styled from 'styled-components'
// import Promise from 'bluebird'

const colors = [
  "#e6194b", //Red
  "#3cb44b", //Green
  "#ffe119", //Yellow
  "#0082c8",//Blue
  "#f58231",//Orange
  "#911eb4",//Purple
  "#46f0f0",//Cyan
  "#f032e6",//Magenta
  "#d2f53c",//Lime
  "#fabebe",//Pink
  "#008080",//Teal
  "#e6beff",//Lavender
  "#aa6e28",//Brown
  "#fffac8",//Beige
  "#800000",//Maroon
  "#aaffc3",//Mint
  "#808000",//Olive
  "#ffd8b1",//Coral
  "#000080",//Navy
  "#808080",//Grey
]
const About = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: #000000;
  margin:0;
  position: absolute;
  width: 100%;
  height: 100%;
  left:0;
  background: ${(props) => props.background};
`

// setTimeout(() => {
//   let state = Object.assign({}, this.state)
//   state.backgroundIndex++
//   if (state.backgroundIndex > colors.length - 1) {
//     state.backgroundIndex = 0
//   }
//   state.background = colors[state.backgroundIndex]
//   this.setState(state)
// }, 2000)

class AboutUs extends Component {

  state = {
    background: '#000000',
  }

  componentDidMount() {
    // Promise.each(colors, (color) => {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       let state = Object.assign({}, this.state)
    //       state.background = color
    //       this.setState(state)
    //       resolve()
    //     }, 2000)
    //   })
    // })
    // .then(() => {
    //   alert('ALL COLORS COMPLETE')
    // })
    let changeColor = (index = 0) => {
      setTimeout(() => {
        let state = Object.assign({}, this.state)
        state.background = colors[index]
        this.setState(state)
        if (index < colors.length - 1) {
          changeColor(index + 1)
        } else {
          alert('ALL COLORS COMPLETE')
        }
      }, 2000)
    }
    changeColor()

  }

  render() {
    return (
      <About background={this.state.background}>
        This is about us
      </About>
    )
  }

}

export { AboutUs as default }