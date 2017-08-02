export const addToArr = (arr, val) => {
  return [...arr, val]
}

export const removeFromArr = (arr, val) => {
  const index = arr.indexOf(val)
  return [
    ...arr.slice(0, index),
    ...arr.slice(index + 1),
  ]
}

// export const calcRateVal = (data, rate, rates ) => {
//   const rateObj = rates.find( obj => obj.value === rate)
//   const params = rateObj.params.map( param => data[param])
//   return {
//     [rateObj.value]: Math.round(rateObj.eq(...params) * 1000)/1000,
//   }
// }

export const getRelevantKeys = (obj, excluded) => {
  return Object.keys(obj)
          .filter( key => key !== excluded )
}

// const getPeriod = (time, timestamp) => {
//   switch (time) {
//     case 'month':
//       return new Date(timestamp).getMonth()
//     case 'day':
//       return new Date(timestamp).getDay()
//     default:
//   }
// }

// const getTimeInterval = time => {
//   switch (time) {
//     case 'day':
//       return days
//     case 'month':
//       return months
//     default:
//   }
// }

// export const aggregateByTime = (selectedData, time) => {
//   const keys = getRelevantKeys(selectedData[0], 'timestamp')
//   const timeInterval = getTimeInterval(time)
//   const aggregatedData = timeInterval.map( (obj, i) => {
//     let dataObj = {
//       period: obj.abv,
//     }
//     keys.forEach( key => {
//       Object.assign(dataObj, {[key]: []})
//     })
//     selectedData.forEach( obj => {
//       const period = getPeriod(time, obj.timestamp)
//       if (period === i) {
//         keys.forEach( key => {
//           dataObj[key].push(obj[key])
//         })
//       }
//     })
//     return dataObj
//   })
//   .filter( obj => obj[keys[0]].length !== 0 )
//   .map( obj => {
//     keys.forEach( key => obj[key] = obj[key]
//       .reduce( (sum, n) => sum + n )
//     )
//     return obj
//   })
//   return aggregatedData
// }

export const sortByValues = (arrToSortBy, arrToSort) => {
  const findIndex = val => arrToSortBy.indexOf( arrToSortBy.find( a => a.value === val) )
  return arrToSort.sort( (x, y) =>  findIndex(x) - findIndex(y) )
}

export const removeDupes = arr => {
  let noDupes = []
  arr.forEach( a => {
    if(!noDupes.includes(a)){
      noDupes = [...noDupes, a]
    }
  })
  return noDupes
}
