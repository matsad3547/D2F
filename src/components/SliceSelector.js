import React from 'react'
import SliceGroup from './SliceGroup'
import Button from './Button'
import { dynamicStyles, sliceParams } from '../config/'
import { sortByValues } from '../utils/'

const SliceSelector = ({  shown,
                          slices,
                          slicesSelected,
                          selectSlice,
                         }) => {

  const sliceKeys = Object.keys(sliceParams)

  const style = dynamicStyles.button

  if (shown) {
    return (
      <div className="slice-and-dice">
        {sliceKeys.map( (slice, i) =>
          <SliceGroup
            slice={slice}
            slices={slices[slice]}
            key={`sg-${i}`}
            selected={slicesSelected[slice]}
            selectSlice={selectSlice}/>
      )}
      <div className="slicer-buttons">
        <Button
          style={style.normal}
          value="Apply"
          />
        <Button
          style={style.normal}
          value="Reset"
          />
      </div>
      </div>
    )
  }
  else return null
}

export default SliceSelector
