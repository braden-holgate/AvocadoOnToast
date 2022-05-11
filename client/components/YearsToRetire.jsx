import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const retire = require('../moneyCalcs/timeToRetirement')

function YearsToRetire() {
  const [years, setYears] = useState()
  const [retirementAge, setRetirementAge] = useState()
  const financials = useSelector((state) => state.financials)
  const { income, incomePeriod, savings, savingsPeriod, currentSavings, age } =
    financials

  useEffect(() => {
    const yearsToRetirement = retire.yearsToRetirement(
      income,
      incomePeriod,
      savings,
      savingsPeriod,
      currentSavings,
      0
    )
    setYears(yearsToRetirement)
    setRetirementAge((Number(age) + Number(yearsToRetirement)).toFixed(0))
  }, [financials])

  return (
    <>
      <section className="retire-years section has-text-centered is-size-3 ">
        <p>Years to retire:</p>
        <p id="years">{years}</p>
        {age && (
          <p className="is-size-4">{`You will be ${retirementAge} years old`}</p>
        )}
      </section>
    </>
  )
}

export default YearsToRetire
