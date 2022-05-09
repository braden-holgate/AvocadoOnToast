import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const time = require('../moneyCalcs/savingsCompoundCalc')
const retire = require('../moneyCalcs/timeToRetirement')

function Barchart () {
  const [years, setYears] = useState()
  const [timesSeries, setTimeSeries] = useState()
  const financials = useSelector(state => state.financials)
  const {income, incomePeriod, savings, savingsPeriod, currentSavings} = financials

  useEffect(() => {
      setYears(retire.yearsToRetirement(income, incomePeriod, savings, savingsPeriod, currentSavings))
  }, [financials])

  useEffect(() => {
    const rate = 0.05
    const newTimeSeries = time.savingsTimeSeries(years, currentSavings, rate, savings, savingsPeriod, 0)
    setTimeSeries(newTimeSeries)
  }, [years])
  

  return (
    <>
  
      <section className="hero has-background-light ">
        <div className="">
          <figure className="barchart image columns is-flex is-centered">
            <img className="banner" src="images/barchart.png" />
          </figure>
        </div>    
      
      </section>

    </>
  )
}

export default Barchart
