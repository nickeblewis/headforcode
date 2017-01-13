import React from 'react'
import ReactDOM from 'react-dom'
import Walks from './components/Walks'
import { Router, Route, browserHistory } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import 'tachyons'
import './index.css'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cixau4eew37y901119kugjuks'}),
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path='/' component={Walks} />
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
