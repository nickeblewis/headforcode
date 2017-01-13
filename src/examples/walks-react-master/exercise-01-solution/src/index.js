import React from 'react'
import ReactDOM from 'react-dom'
import Walks from './components/Walks'
import { Router, Route, browserHistory } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import 'tachyons'
import './index.css'

// The URL below has been taken from the Graph.cool endpoints for our project
// this piece of code is all that we need to connect the front-end to the back-end
const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cixraxev60e4c0121krsia44h'}),
})

// Note the addition of Apollo below, this passes through the data connection to the entire app
ReactDOM.render((
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path='/' component={Walks} />
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
