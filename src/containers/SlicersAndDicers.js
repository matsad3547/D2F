import React, { Component } from 'react'
import SliceSelector from '../components/SliceSelector'
import { addToArr, removeFromArr } from '../utils/'

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
      shown: !this.state.shown,
    })
  }

  selectSlice({ slice, val }){
    const slices = this.state.slicesSelected[slice]
    const slicesSelected = {...this.state.slicesSelected}
    if (slices.includes(val)){
      slicesSelected[slice] = addToArr(slices, val)
      this.setState({
        slicesSelected,
      })
    }
    else {
      slicesSelected[slice] = removeFromArr(slices, val),
      this.setState({
        slicesSelected,
      })
    }
  }
s
  render(){
    const style = {
      clicked: {
        background: '#351c28',
        color: '#fefefe',
      },
      normal: {
        background: '#bebebe',
        color: '#351c28',
      }
    }
    console.log('slices selected at state', this.state.slicesSelected);
    return(
      <div className="slicer" ref={this.setWrapperRef}>
        <input
          className="button-static"
          style={ this.state.shown ? style.clicked : style.normal }
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
