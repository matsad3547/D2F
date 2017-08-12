import React, { Component } from 'react'

import MainWrapper from './MainWrapper'
import SocialReport from '../components/SocialReport'

export default class Social extends Component {
  // constructor(props){
  //   super(props)
  // }

  render(){
    return (
      <div>
        <MainWrapper>
          <SocialReport />
        </MainWrapper>
      </div>
    )
  }
}
