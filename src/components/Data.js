import React from 'react'


const makeData = () => {
  const today = new Date()
  const oneYearAgo = new Date(today.setFullYear(new Date().getFullYear() - 1))
  const length = 183
  const max = 100
  const arr = new Array(length).fill(undefined)
  const getRandoNum = () => Math.round(Math.random() * (max) + Math.round(Math.random() * 50))

  return arr.map( (d, i) => {
    return {
      'timestamp': new Date(new Date().setHours(oneYearAgo.getHours() + (24 * i))),
      'opens': getRandoNum(),
      'deliveries': getRandoNum(),
      'clicks': getRandoNum(),
      'unsubscribes': getRandoNum(),
      'form_fills': getRandoNum(),
      'hard_bounces': getRandoNum(),
      'soft_bounces': getRandoNum(),
    }
  })
}

const data = {
  "timeseries": makeData()
}

const Data = () => (
  <div>
    {JSON.stringify(data, null, "")}
  </div>
)

export default Data


//
// const Timeseries = () => {
//   return (
//     <div>
//       `		{
// 			"timestamp": "2017-03-20T00:00:00+00:00",
// 			"emails_sent": 1,
// 			"unique_opens": 0,
// 			"recipients_clicks": 0
// 		},`
//     </div>
//   )
// }
