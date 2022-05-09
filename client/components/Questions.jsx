
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadFinancials, updateFrequency, getCosts } from '../actions'

function Questions() {

  const dispatch = useDispatch()
  const items = useSelector(state => state.costs)
  const [income, setIncome] = useState(null)
  const [incomePeriod, setIncomePeriod] = useState('week')
  const [currentSavings, setCurrentSavings] = useState(null)
  const [savings, setSavings] = useState(null)
  const [savingsPeriod, setSavingsPeriod] = useState('week')
  const [hoursWorkedPerWeek, setHoursWorkedPerWeek] = useState(null)
  const [localItems, setLocalItems] = useState("items")
  const [coffeeCost, setCoffeeCost] = useState(null)
  const [eatingOutCost, setEatingOutCost] = useState(null)

  useEffect(() => {
  dispatch(getCosts())
  }, [])

  useEffect(() => {
    setCoffeeCost(items[0])
    setEatingOutCost(items[1])
    setLocalItems(items)
  }, [items])

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

  const handleCurrentSavings = (e) => {
    setCurrentSavings(e.target.value)
  }

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
  // function to be used if we let users create their own inputs
  // const handleItems = (e) => {
  //   const temp = localItems.map((item) => {
  //     item.item === e.target.name ? item.frequencyPerWeek = e.target.value : null
  //     return item
  //   })
  //   setLocalItems(temp)
  // }


  const handleCalculate = (e) => {
    e.preventDefault()
    let costsArray = []
    costsArray.push(coffeeCost, eatingOutCost)

    const financials = {
      ...{income}, 
      ...{incomePeriod}, 
      ...{savings}, 
      ...{savingsPeriod}, 
      ...{hoursWorkedPerWeek},
      ...{currentSavings}}

    dispatch(updateFrequency(costsArray))
    dispatch(loadFinancials(financials))
  }

  return (
    <>
      <section className="question section has-text-centered is-size-5">
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

          <input type="text" name="income" className="input" placeholder="Enter your income" defaultValue={income}
            onChange={handleIncome}></input>
          

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

          <input type="text" name="income" className="input" placeholder="Estimate save" defaultValue={savings}
            onChange={handleSavings}></input>

          <select onChange={savingFrequency} defaultValue={savingsPeriod}>
            <option  value="week">
              Week
            </option>
            <option value="fortnight">Fortnight</option>
            <option value="year">Year</option>
          </select>
        </div>

        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
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
          /> 
        </div>
        
        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">How many hours per week do you work?</label>
          </strong>

          <input type="text" name="income" className="input" placeholder="Working hours weekly" defaultValue={hoursWorkedPerWeek}
            onChange={handleHoursInput}></input>

        </div>

        {/* //LOU - MAKE SURE TO PREVENT NEGATIVE NUMBERS */}
        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">
              How often do you buy coffee per week?
            </label>
          </strong>

          <input type="text" name="income" className="input" placeholder="Coffee weekly"
            onChange={handleCoffee}></input>

        </div>
        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">
              How often do you buy lunch/dinner/takeaways per week?
            </label>
          </strong>

          <input type="text" name="income" className="input" placeholder="Eating out" 
            onChange={handleEatingOut}></input>

        </div>
        <button onClick={handleCalculate} type='submit'>Calculate</button>
       
       
        {/* -----Jessie's toggle test-----start----- */}
         {/* toggle 1 */}
        {/* <div className='toggle-box'>
          <label className="label">
            <div className="toggle">
              <input className="toggle-state" type="checkbox" name="check" value="check"/>
            <div className="indicator"></div>
            </div>
          </label>
        </div> */}
 
      </section>
    </>
  )
}

export default Questions
