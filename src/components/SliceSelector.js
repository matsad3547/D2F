import React from 'react'
import SliceGroup from './SliceGroup'

const SliceSelector = ({  shown,
                          reference,
                          slices,
                          slicesSelected,
                         }) => {
  if (shown) {
    console.log('slices:', slices);
    return (
      <div ref={reference} className="slice-and-dice">
        {slices.map( (slice, i) =>
          <SliceGroup
          slice={slice}
          key={`sg-${i}`}
          selected={slicesSelected[slice]}/>
      )}
      </div>
    )
  }
  else return null
}

export default SliceSelector
