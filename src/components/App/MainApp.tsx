import React from 'react'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'components/pages/Home'

const MainApp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default MainApp
