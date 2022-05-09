import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const util = require('../moneyCalcs/timeToRetirement')

function YearsToRetire () {
  const [years, setYears] = useState()
  const financials = useSelector(state => state.financials)
  const {income, incomePeriod, savings, savingsPeriod} = financials

  useEffect(() => {
      setYears(util.yearsToRetirement(income, incomePeriod, savings, savingsPeriod))
  }, [financials])

  return (
    <>
      <section className="retire-years section has-text-centered is-size-3 ">
        <p>Years to retire:</p>
        <p id="years">{years}</p>
      </section>
    </>
  )
}

export default YearsToRetire
