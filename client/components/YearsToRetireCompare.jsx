import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const util = require('../moneyCalcs/timeToRetirement')

function YearsToRetire () {
  const [years, setYears] = useState()
  const financials = useSelector(state => state.financials)
  const {income, incomePeriod, savings, savingsPeriod} = financials
  
  // calculate extra savings per week
  const costs = useSelector(state => state.costs)
  const compareCosts = useSelector(state => state.compareCosts)

  const [weeklySavings, setWeeklySavings] = useState(0)
  // console.log("Weekly savings: ", weeklySavings)

  useEffect(() => {
      let weeklySavingsCount = 0
      for (let i = 0; i < costs.length; i++) {
        let costsFreq = Number(costs[i].frequencyPerWeek)
        let compareCostsFreq = Number(compareCosts[i].frequencyPerWeek)
        weeklySavingsCount += (costsFreq - compareCostsFreq) * costs[i].cost
      }    
      setWeeklySavings(weeklySavingsCount)
  }, [compareCosts])



  // TODO:
  // update yearsToRetirement to recieve additional savings as an input
  // display estimated cost of item on webpage
  // STRETCH - give user option of changing estimated cost


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
