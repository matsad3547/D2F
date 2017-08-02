import React from 'react'
import Button from './Button'
import { timeGroups, dynamicStyles } from '../config/'

const TimeGroupingBar = ({  setTimeGroup,
                            timeGroupSelected,
                            children,
                          }) => {

  const style = dynamicStyles.button

  return (
    <div className='time-group'>
      <div>
        { timeGroups.map( (int, i) => <Button
          style={ (int.value === timeGroupSelected) ? style.clicked : style.normal }
          key={i}
          onClick={ () => setTimeGroup(int.value) }
          value={int.label}/>
      )}
      </div>
    {children}
    </div>
  )
}

export default TimeGroupingBar
