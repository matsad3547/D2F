import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Button from './Button'
import { metrics, rates } from '../utils/'

const EmailReportTable = ({ tableData }) => {

  const metricColumns = metrics.map( metric => {
    return {
      Header: metric.label,
      accessor: metric.value,
    }
  })

  const rateColumns = rates.map( rate => {
    return {
      id: rate.value,
      Header: rate.label,
      accessor: d => (parseFloat(d[rate.value]) * 100 ).toFixed(1) + '%' ,
    }
  })

  const columns = [
    {
      Header: 'Email Name',
      accessor: 'name',
      minWidth: 190,
    },
    ...metricColumns,
    ...rateColumns,
  ]

  if (tableData) {
    return (
      <div className="table block">
        <div className="table-header">
          <Button
            value={'Download CSV'}
            onClick={ () => console.log('Downloading CSV')} />
        </div>
        <ReactTable
          data={tableData}
          columns={columns}
          minRows={10}
          />
      </div>
    )
  }
  else {
    return (
      <div className="chart">Data is loading...</div>
    )
  }
}

export default EmailReportTable
