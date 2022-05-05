import React from 'react'

function Questions () {
  // shape of financials state
  // {
  //   income: null,
  //   incomePeriod: null,
  //   currentSavings: null,
  //   savings: null,
  //   savingsPeriod: null,
  //   hoursWorkedPerWeek: null,
  // }

  // shape of costs state
  //   [{
  //    id: 1,        <- DB
  //    item: coffee,     <- DB
  //    cost: 5,       <- DB
  //    frequencyPerWeek: 3}, <- user input, default 0
  //   ]
  return (
    <>
      <section className="section has-background-white has-text-centered is-size-5">
        <h2>What is your income?</h2>
        <h2>How much do you estimate you save?</h2>
        <h2>How much do you currently have saved?</h2>
      --------------
        <h3>How often do you buy coffee per week?</h3>
        <h3>How often do you buy lunch/dinner/takeaways per week?</h3>
      </section>
    </>
  )
}

export default Questions
