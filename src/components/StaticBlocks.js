import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #ffffff;
`;

const staticblocka = styled.section`
  background: #4286f4;
`;

const staticblockb = styled.section`
  background: #b841f4;
`;

const staticblockc = styled.section`
  background: #f44167;
`;

const staticblockd = styled.section`
  background: #76f441;
`;

<staticblocka>
<Title>This is Block A</Title>
</staticblocka>;

<staticblockb>
<Title>This is Block B</Title>
</staticblockb>;

<staticblockc>
<Title>This is Block C</Title>
</staticblockc>;

<staticblockd>
<Title>This is Block D</Title>
</staticblockd>;


componentDidMount() {
    console.log('COMPONENT MOUNT')
    console.log(this.container)
    setTimeout(() => {
      console.log(this.container.clientWidth, this.container.getBoundingClientRect())
    }, 200)
  }


  <Desktop innerRef={(comp) => { this.container = comp }}>