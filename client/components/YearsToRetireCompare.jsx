import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const retire = require('../moneyCalcs/timeToRetirement')
const utils = require('../moneyCalcs/utils')
function YearsToRetire() {
  const [years, setYears] = useState()
  const [retirementAge, setRetirementAge] = useState()
  const financials = useSelector(state => state.financials)
  const { income, incomePeriod, savings, savingsPeriod, currentSavings } = financials

  const costs = useSelector(state => state.costs)
  const compareCosts = useSelector(state => state.compareCosts)

  // TODO:
  // once age is available from form inputs, update this line to receive currentAge from state
  // delete the below line once this is done
  const currentAge = 30

  useEffect(() => {
    const weeklySavingsCount = utils.additionalSavings(costs, compareCosts)

    const yearsToRetirement = retire.yearsToRetirement(income, incomePeriod, savings, savingsPeriod, currentSavings, weeklySavingsCount)
    setYears(yearsToRetirement)

    setRetirementAge((Number(currentAge) + Number(yearsToRetirement)).toFixed(0))
  }, [compareCosts])

  return (
    <>
      <section className="retire-years section has-text-centered is-size-3 ">
      <p>Years to retire:</p>
        <p id="years">{years}</p>
        {currentAge &&
          <p className="is-size-4">{`You will be ${retirementAge} years old`}</p>}

      </section>
    </>
  )
}


export default YearsToRetire
