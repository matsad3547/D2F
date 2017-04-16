import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
// import TestUtils from 'react-dom/test-utils'
import { shallow, mount } from 'enzyme'
// import document from './config/mock.js'
//

describe('App() ', () => {
  it('renders without crashing', () => {
    shallow(<App />)
    //TODO This bullshit no worky!!!  FML!!!
    global.document = {
      createElement: function(){
        return {
          on: function() {}
        }
      }
    }
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
  })
  // it('the whole fuckstory renders without crashing', () => {
  //   mount(<App />)
  // })

  //TODO shit that works:
  // const wrapper = shallow(<App />)
  // const metricsSelected = wrapper.state().metricsSelected


  it('should add a metric to the state', () => {
    const tester = new App()
    const selectMetric = tester.selectMetric
    const actual = selectMetric('Tigers')
    const expected = tester.state.metricsSelected.testerApp
    expect(actual).toEqual(expected)
  })
})
