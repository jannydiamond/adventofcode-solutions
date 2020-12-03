import React from 'react'
import { Link } from 'react-router-dom'

import { expenseReport } from './data/expenseReport'

import Main from 'components/atoms/Main'
import H1 from 'components/atoms/H1'
import H2 from 'components/atoms/H2'
import Spoiler from 'components/atoms/Spoiler'

import { findTwoEntriesToSum } from './helpers'
import { findThreeEntriesToSum } from './helpers'

const Day1_2020 = () => {
  const expenseReportResult = findTwoEntriesToSum(expenseReport, 2020)
  const expenseReportResult2 = findThreeEntriesToSum(expenseReport, 2020)

  return (
    <Main>
      <H1>Day 1: Report repair</H1>
      <Link to="/">Back to Overview</Link>
      <p>
        To prevent spoilers all results are blackened out. To see the results
        just hover over those areas and wait 2s.
      </p>
      <H2>Part One</H2>
      <p>
        <Spoiler>
          {expenseReportResult.value1} + {expenseReportResult.value2}
        </Spoiler>{' '}
        = {expenseReportResult.result}
      </p>
      <p>
        Final result:{' '}
        <Spoiler>
          {expenseReportResult.value1 * expenseReportResult.value2}
        </Spoiler>
      </p>
      <h2>Part Two</h2>
      <p>
        <Spoiler>
          {expenseReportResult2.value1} + {expenseReportResult2.value2} +{' '}
          {expenseReportResult2.value3}
        </Spoiler>{' '}
        = {expenseReportResult2.result}
      </p>
      <p>
        Final result:{' '}
        <Spoiler>
          {expenseReportResult2.value1 *
            expenseReportResult2.value2 *
            expenseReportResult2.value3}
        </Spoiler>
      </p>
    </Main>
  )
}

export default Day1_2020
