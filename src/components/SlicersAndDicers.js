import React, { Component } from 'react'
import SliceSelector from './SliceSelector'

export default class SlicersAndDicers extends Component {
  constructor(props){
    super(props)
    this.state = {
      shown: false,
      slicesSelected: {
        accounts: [],
        lists: [],
        segments: [],
        interestCategories: [],
        locations: [],
        members: [],
        campaignsOrEmails: [],
      }
    }
    this.onClick = this.onClick.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
  }

  handleClickOutside(e) {
    if(this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.setState({
        shown: false,
      })
    }
  }

  componentDidMount(){
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node){
    this.wrapperRef = node
  }

  onClick(){
    this.setState({
      shown: !this.state.shown,
    })
  }

  render(){
    const style = {
      normal: {
        background: '#351c28',
        color: '#fefefe',
      },
    }
    return(
      <div className="slicer">
        <input
          className="button-static"
          style={ style.normal }
          type="button"
          onClick={this.onClick}
          value="Slicers & Dicers"
          ></input>
        <SliceSelector
          reference={this.setWrapperRef}
          shown={this.state.shown}
          slices={this.props.slices}
          slicesSelected={this.state.slicesSelected}/>
      </div>
    )
  }
}
