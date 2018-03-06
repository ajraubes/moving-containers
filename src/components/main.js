import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePageLayout from './homepagelayout';
import AboutUs from './aboutus'
import ContactUs from './contactus'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePageLayout}/>
      <Route path='/aboutus' component={AboutUs}/>
      <Route path='/contactus' component={ContactUs}/>
    </Switch>
  </main>
)

export default Main
