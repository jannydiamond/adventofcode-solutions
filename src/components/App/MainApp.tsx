import React from 'react'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'components/pages/Home'
import Day1_2020 from 'components/pages/Day1_2020'

const MainApp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/2020/day1">
          <Day1_2020 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default MainApp
