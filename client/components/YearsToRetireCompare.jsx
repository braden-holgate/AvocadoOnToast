import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const retire = require('../moneyCalcs/timeToRetirement')
const utils = require('../moneyCalcs/utils')
function YearsToRetire () {
  const [years, setYears] = useState()
  const financials = useSelector(state => state.financials)
  const {income, incomePeriod, savings, savingsPeriod, currentSavings } = financials
  
  // calculate extra savings per week
  const costs = useSelector(state => state.costs)
  const compareCosts = useSelector(state => state.compareCosts)

  const [weeklySavings, setWeeklySavings] = useState(0)


  useEffect(() => {
      const weeklySavingsCount = utils.additionalSavings(costs, compareCosts)
      setWeeklySavings(weeklySavingsCount)
  }, [compareCosts])


  // TODO:
  // update yearsToRetirement to recieve additional savings as an input
  // display estimated cost of item on webpage
  // STRETCH - give user option of changing estimated cost


  useEffect(() => {
      setYears(retire.yearsToRetirement(income, incomePeriod, savings, savingsPeriod, currentSavings, weeklySavings))
  }, [compareCosts])

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
