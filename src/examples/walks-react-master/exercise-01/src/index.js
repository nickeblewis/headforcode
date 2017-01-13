import React from 'react'
import ReactDOM from 'react-dom'
import Walks from './components/Walks'
import { Router, Route, browserHistory } from 'react-router'
import 'tachyons'
import './index.css'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={Walks} />
  </Router>
  ),
  document.getElementById('root')
)
