import React, { Component } from 'react'

import store from './redux/store'
import SumContainer from './containers/Sum'

export default class App extends Component {
  render() {
    return (
      <div>
        <SumContainer store={store}/>
      </div>
    )
  }
}
