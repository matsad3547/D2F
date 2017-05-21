import React from 'react'
import { timeGroups } from '../utils/'

const TimeGroupingBar = ({  setTimeGroup,
                            timeGroupSelected,
                            children ,
                          }) => {

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

  return (
    <div className='time-group'>
      <div>
        { timeGroups.map( (int, i) => <input
          style={ (int.value === timeGroupSelected) ? style.clicked : style.normal }
          type="button"
          key={i}
          onClick={ () => setTimeGroup(int.value) }
          value={int.label}></input>
      )}

      </div>

    {children}
    </div>
  )
}

export default TimeGroupingBar
