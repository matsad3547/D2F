import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import rd3 from 'rd3'

const LineChart = rd3.LineChart

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        metricsSelected: []
      }
    this.selectMetric=this.selectMetric.bind(this)
  }

  selectMetric(metric){
    const metricsSelected = this.state.metricsSelected
    const index = metricsSelected.indexOf(metric)
    if (index !== -1) {
      metricsSelected.splice(index, 1)
    }
    else {
      metricsSelected.push(metric)
    }
    this.setState({
      metricsSelected,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to D2F</h1>
        </div>

      </div>
    );
  }
}

// <Main
//   selectMetric={this.selectMetric}
//   metricsSelected={this.state.metricsSelected}/>

export default App;

export const Dicknuts = () => (<div><h1>Dicknuts!</h1></div>)

export const Main = ({ selectMetric, metricsSelected }) => {

  const metrics = [
    'Opens',
    'Deliveries',
    'Clicks',
    'Unsubscribes',
    'Form Fills',
    'Hard Bounces',
    'Soft Bounces'
  ]

  return (
    <div className="main">
      <h2>How Are We Doing?</h2>
      <Sidebar
        selectMetric={selectMetric}
        metrics={metrics}
        metricsSelected={metricsSelected}
        />
      <Graphs />
    </div>
  )
}

const Sidebar = ({ metrics, selectMetric, metricsSelected }) => {

  return (

    <div className="sidebar">
      <h3>Choose your Metrics</h3>
      { metrics.map( metric => <Checkbox
        selectMetric={selectMetric}
        key={metric}
        metric={metric}
        checked={metricsSelected.includes(metric)}/> )}
    </div>
  )
}

// <form  onSubmit={onSubmit}>
//   <button type="submit">Submit</button>
// </form>

const Checkbox = ({ metric, selectMetric, checked }) => {

  return (
    <div className="checkbox">
      <ul>
        <li>{metric}</li>
        <li><input
          type="checkbox"
          value={metric}
          onChange={ () => selectMetric(metric) }
          checked={checked}
          ></input></li>
      </ul>
    </div>
  )
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const getRandoData = () => new Array(12).fill().map( n => Math.random().toFixed(3) * 1000 )




// const ControlledTabs = React.createClass({
//
//   getInitialState() {
//     return {
//       key: 1
//     };
//   },
//
//   handleSelect(key) {
//     // alert('selected ' + key);
//     this.setState({key});
//   },
//
//   render() {
//     return (
//       <div className="graphs">
//         <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
//           <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
//           <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
//           <Tab eventKey={3} title="Tab 3" >Tab 3 content</Tab>
//         </Tabs>
//       </div>
//     );
//   }
// })

const Graphs = () => {
  return (
    <div className="graphs">
      <TrendChart />
    </div>
  )
}

const TrendChart = (props) => {

  const lineData = [
      {
        name: 'series1',
        values: [ { x: 0, y: 20 }, { x: 1, y: 30 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 4, y: 8 }, { x: 5, y: 15 }, { x: 6, y: 10 } ],
        strokeWidth: 3,
        strokeDashArray: "5,5",
      },
      {
        name: 'series2',
        values : [ { x: 0, y: 8 }, { x: 1, y: 5 }, { x: 2, y: 20 }, { x: 3, y: 12 }, { x: 4, y: 4 }, { x: 5, y: 6 }, { x: 6, y: 2 } ]
      },
      {
        name: 'series3',
        values: [ { x: 0, y: 0 }, { x: 1, y: 5 }, { x: 2, y: 8 }, { x: 3, y: 2 }, { x: 4, y: 6 }, { x: 5, y: 4 }, { x: 6, y: 2 } ]
      }
    ];

  return (
    <div className="chart">
      <LineChart
        circleRadius={5}
        legend={true}
        data={lineData}
        width="100%"
        height={400}
        viewBoxObject={{
          x: 0,
          y: 0,
          width: 500,
          height: 400,
        }}
        title="Trends"
        yAxisLabel="Metrics"
        xAxisLabel="Months"
        domain={{x: [-1, 6], y: [-10]}}
        gridHorizontal={true}
        />
    </div>
  )
}
