import React from 'react'
import { sliceParams } from '../utils/'
import SliceCheckbox from './SliceCheckbox'

const SliceGroup = ({ slice,
                      slices,
                      selected,
                      selectSlice,
                    }) => {

  return(
    <div className="slice-group">
      <p>{sliceParams[slice].label}</p>
      {slices.map( (val, i) => <SliceCheckbox
        key={`slice-checkbox-${i}`}
        val={val}
        checked={selected.includes(val)}
        slice={slice}
        selectSlice={selectSlice}/>
      )}
    </div>
  )
}

export default SliceGroup
