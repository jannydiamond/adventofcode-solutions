import React from 'react'
import { Link } from 'react-router-dom'

import { passwords } from './data/passwords'

import Main from 'components/atoms/Main'
import H1 from 'components/atoms/H1'
import H2 from 'components/atoms/H2'
import Spoiler from 'components/atoms/Spoiler'

import { getValidPasswords, getValidPasswordsToboggan } from './helpers'

const Day2_2020 = () => {
  const validPasswords = getValidPasswords(passwords)
  const validPasswordsToboggan = getValidPasswordsToboggan(passwords)

  return (
    <Main>
      <H1>Day 2: Password Philosophy</H1>
      <Link to="/">Back to Overview</Link>
      <p>
        To prevent spoilers all results are blackened out. To see the results
        just hover over those areas and wait 2s.
      </p>
      <H2>Part One</H2>
      <p>
        Number of valid passwords: <Spoiler>{validPasswords.length}</Spoiler>
      </p>
      <H2>Part Two</H2>
      <p>
        Number of valid passwords:{' '}
        <Spoiler>{validPasswordsToboggan.length}</Spoiler>
      </p>
    </Main>
  )
}

export default Day2_2020
