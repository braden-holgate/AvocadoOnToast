
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loadFinancials, updateFrequency } from '../actions'

function Questions() {

  const dispatch = useDispatch()
  const [income, setIncome] = useState(null)
  const [incomePeriod, setIncomePeriod] = useState('week')
  // const [currentSavings, setCurrentSavings] = useState(null)
  const [savings, setSavings] = useState(null)
  const [savingsPeriod, setSavingsPeriod] = useState('week')
  const [hoursWorkedPerWeek, setHoursWorkedPerWeek] = useState(null)

  const [coffeeCost, setCoffeeCost] = useState({
    id: 1,
    item: 'coffee',
    cost: 5,
    frequencyPerWeek: 0,
  })
  const [eatingOutCost, setEatingOutCost] = useState({
    id: 2,
    item: 'eatingOut',
    cost: 20,
    frequencyPerWeek: 0,
  })

  const handleIncome = (e) => {
    setIncome(Number(e.target.value))

  }

  const incomeFrequency = (e) => {
    setIncomePeriod(e.target.value)
  }

  const handleSavings = (e) => {
    setSavings(Number(e.target.value))
  }

  const savingFrequency = (e) => {
    setSavingsPeriod(e.target.value)
  }

  // const handleCurrentSavings = (e) => {
  //   setCurrentSavings(e.target.value)
  // }

  const handleHoursInput = (e) => {
    setHoursWorkedPerWeek(Number(e.target.value))
  }

  const handleCoffee = (e) => {
    setCoffeeCost({
      ...coffeeCost,
      frequencyPerWeek: e.target.value,
    })
  }

  const handleEatingOut = (e) => {
    setEatingOutCost({
      ...eatingOutCost,
      frequencyPerWeek: e.target.value,
    })
  }


  const handleCalculate = (e) => {
    e.preventDefault()
    let costsArray = []
    costsArray.push(coffeeCost, eatingOutCost)

const financials = {
  ...{income}, 
  ...{incomePeriod}, 
  ...{savings}, 
  ...{savingsPeriod}, 
  ...{hoursWorkedPerWeek}}

dispatch(updateFrequency(costsArray))
dispatch(loadFinancials(financials))
  }

  return (
    <>
      <section className="section has-background-white has-text-centered is-size-5">
        <div
          style={{
            whiteSpace: 'nowrap',
            marginBottom: '25px',
            marginTop: '25px',
          }}
        >
          <strong>
            <label className="mr-2">What is your income?</label>
          </strong>
          <input
            name="income"
            type="text"
            style={{ width: '200px', padding: '5px', border: '1px solid #ccc' }}
            placeholder="Enter your income here"
            defaultValue={income}
            onChange={handleIncome}
          />

          <select onChange={incomeFrequency} defaultValue={incomePeriod}>
            <option  value="week">
              Week
            </option>
            <option value="fortnight">Fortnight</option>
            <option value="year">Year</option>
          </select>
        </div>

        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">How much do you estimate you save?</label>
          </strong>
          <input
            name="average-savings"
            type="text"
            style={{ width: '200px', padding: '5px', border: '2px solid #ccc' }}
            placeholder="Enter how much you think you save here"
            defaultValue={savings}
            onChange={handleSavings}
          />
          <select onChange={savingFrequency} defaultValue={savingsPeriod}>
            <option  value="week">
              Week
            </option>
            <option value="fortnight">Fortnight</option>
            <option value="year">Year</option>
          </select>
        </div>

        {/* <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">
              How much do you currently have saved?
            </label>
          </strong>
          <input
            name="current-savings"
            type="text"
            style={{ width: '200px', padding: '5px', border: '2px solid #ccc' }}
            placeholder="Enter how much you already have saved here"
            defaultValue={currentSavings}
            onChange={handleCurrentSavings}
          /> */}
        {/* </div> */}
        
        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">How many hours per week do you work?</label>
          </strong>
          <input
            name="hours-worked"
            type="text"
            style={{ width: '200px', padding: '5px', border: '2px solid #ccc' }}
            placeholder="Enter how many hours per week do you work"
            defaultValue={hoursWorkedPerWeek}
            onChange={handleHoursInput}
          />
        </div>

        {/* //LOU - MAKE SURE TO PREVENT NEGATIVE NUMBERS */}
        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">
              How often do you buy coffee per week?
            </label>
          </strong>
          <input
            name="coffees"
            type="number"
            style={{ width: '200px', padding: '5px', border: '2px solid #ccc' }}
            placeholder="Enter your average weekly coffee count"
            defaultValue={coffeeCost}
            onChange={handleCoffee}
          />
        </div>
        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">
              How often do you buy lunch/dinner/takeaways per week?
            </label>
          </strong>
          <input
            name="food"
            type="number"
            style={{ width: '200px', padding: '5px', border: '2px solid #ccc' }}
            placeholder="Enter your weekly takeout count"
            defaultValue={eatingOutCost}
            onChange={handleEatingOut}
          />
        </div>
        <button onClick={handleCalculate} type='submit'>Calculate</button>
      </section>
    </>
  )
}

export default Questions
