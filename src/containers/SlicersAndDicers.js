import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SliceSelector from '../components/SliceSelector'
import { addToArr, removeFromArr } from '../utils/'
import { dynamicStyles } from '../config/'

export default class SlicersAndDicers extends Component {
  constructor(props){
    super(props)
    this.state = {
      shown: false,
      slicesSelected: {
        accounts: [],
        lists: [],
        campaigns: [],
        segments: [],
        interestCategories: [],
        locations: [],
        members: [],
      }
    }
    this.onClick = this.onClick.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.selectSlice = this.selectSlice.bind(this)
  }

  handleClickOutside(e) {
    if(this.wrapperRef && !this.wrapperRef.contains(e.target) && this.state.shown) {
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

  onClick(e){
    e.preventDefault()
    this.setState({
      shown: this.state.shown ? false : true,
    })
  }

  selectSlice({ slice, val }){
    const slices = this.state.slicesSelected[slice]
    if (!slices.includes(val)){
      const slicesSelected = {
        ...this.state.slicesSelected,
        [slice]: addToArr(slices, val)
      }
      this.setState({
        slicesSelected,
      })
    }
    else {
      const slicesSelected = {
        ...this.state.slicesSelected,
        [slice]: removeFromArr(slices, val),
      }
      this.setState({
        slicesSelected,
      })
    }
  }
s
  render(){

    return(
      <div className="slicer" ref={this.setWrapperRef} style={ this.state.shown ? {width: '15em'} : {width: 'auto'}}>
        <input
          className="button-static"
          style={ this.state.shown ? dynamicStyles.button.clicked : dynamicStyles.button.normal }
          type="button"
          onClick={this.onClick}
          value="Slicers & Dicers"
          ></input>
        <SliceSelector
          shown={this.state.shown}
          slices={this.props.slices}
          slicesSelected={this.state.slicesSelected}
          selectSlice={this.selectSlice}/>
      </div>
    )
  }
}

SlicersAndDicers.propTypes = {
  slices: PropTypes.object.isRequired,
}
