import React from 'react'
import SliceGroup from './SliceGroup'

const SliceSelector = ({  shown,
                          slices,
                          slicesSelected,
                          selectSlice,
                         }) => {
  const sliceKeys = Object.keys(slices)
  // console.log('sliceKeys:', sliceKeys);
  console.log('slicesSelected:', slicesSelected);
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
      </div>
    )
  }
  else return null
}

export default SliceSelector
