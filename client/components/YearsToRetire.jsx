import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const util = require('../moneyCalcs/timeToRetirement')

function YearsToRetire () {
  const [years, setYears] = useState()
  const financials = useSelector(state => state.financials)
  const {income, incomePeriod, savings, savingsPeriod} = financials

  console.log(financials)
  // console.log(util.yearsToRetirement(income, incomePeriod, savings, savingsPeriod))

  useEffect(() => {
      setYears(util.yearsToRetirement(income, incomePeriod, savings, savingsPeriod))
  }, [financials])

  return (
    <>
      <section className="retire-years section has-text-centered is-size-3 ">
        <h2>Years to retire:</h2>
        <p id="years">{years}</p>
      </section>
    </>
  )
}

export default YearsToRetire
