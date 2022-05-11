import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const utils = require('../moneyCalcs/utils')

function TotalExpense() {
  const costs = useSelector((state) => state.costs)
  const compareCosts = useSelector((state) => state.compareCosts)
  const [weeklySavings, setWeeklySavings] = useState(0)
  const financials = useSelector((state) => state.financials)
  const { income, incomePeriod, savings, savingsPeriod } = financials
  const [retirementTotal, setRetirementTotal] = useState()

  useEffect(() => {
    const weeklySavingsCount = utils.additionalSavings(costs, compareCosts)
    setWeeklySavings(weeklySavingsCount)
  }, [compareCosts])

  useEffect(() => {
    setRetirementTotal(
      utils.retirementAmount(
        income,
        incomePeriod,
        savings,
        savingsPeriod,
        weeklySavings
      )
    )
  }, [compareCosts])

  return (
    <>
      <section className="section has-text-centered is-size-5 ">
        <p>A rule of thumb says that you can live off investment income when your total  investment is 25 x expenses.</p>
        <span className="has-tooltip-multiline" data-tooltip=" Assumes you get on average 5% inflation adjusted returns on your stash of investments, and you are withdrawing 4% of it. So your stash never depletes."><img className="tooltip-icon" src="/images/tooltip.png"></img></span>
        <p className="for-you">For you that is:</p>
        {retirementTotal ? (
          <p className="total-expense">
            ${new Intl.NumberFormat('us-US').format(retirementTotal)}
          </p>
        ) : (
          <p className="total-expense">?</p>
        )}
      </section>
    </>
  )
}

export default TotalExpense
