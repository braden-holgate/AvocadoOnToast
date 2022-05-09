import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const util = require('../moneyCalcs/timeToRetirement')

function YearsToRetire () {
  const [years, setYears] = useState()
  const [retirementAge, setRetirementAge] = useState()
  const financials = useSelector(state => state.financials)
  const {income, incomePeriod, savings, savingsPeriod, currentSavings} = financials 
  
  // TODO:
  // once age is available from inputs, update this line to receive currentAge from state
  // delete the below line once this is done

  const currentAge = 30

  // NOTE: if age = null, a different message will render - this can be changed in the return section below 
  
  useEffect(() => {
      const yearsToRetirement = util.yearsToRetirement(income, incomePeriod, savings, savingsPeriod, currentSavings)
      setYears(yearsToRetirement)
      setRetirementAge((Number(currentAge) + Number(yearsToRetirement)).toFixed(0))
  }, [financials])



  return (
    <>
      <section className="retire-years section has-text-centered is-size-3 ">
        <p>Years to retire:</p>
        <p id="years">{years}</p>
        {currentAge ? 
          <p className="is-size-5">{`You will be ${retirementAge} years old when you retire!`}</p> : 
          <p className="is-size-5">Add your age in the options above to see your retirement age!</p>}
               
      </section>
    </>
  )
}

export default YearsToRetire
