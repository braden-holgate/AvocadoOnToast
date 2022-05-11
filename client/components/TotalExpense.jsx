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
        <p>
          A rule of thumb says that you can live off investment income when your
          total investment is 25 x expenses.
        </p>
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
