import React from 'react'
import { Link } from 'react-router-dom'

import Main from 'components/atoms/Main'
import H1 from 'components/atoms/H1'
import H2 from 'components/atoms/H2'

const Home = () => {
  return (
    <Main>
      <H1>My "Advent of Code"-Solutions</H1>
      <p>
        Webseite:{' '}
        <a href="https://adventofcode.com/" target="_blank">
          adventofcode.com
        </a>
      </p>
      <H2>2020</H2>
      <ul>
        <li>
          <Link to="/2020/day1">Day 1</Link>
        </li>
        <li>
          <Link to="/2020/day2">Day 2</Link>
        </li>
      </ul>
    </Main>
  )
}

export default Home
