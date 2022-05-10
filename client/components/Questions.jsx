
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadFinancials, updateFrequency, getCosts, setCompareCosts } from '../actions'
import AdditionalOptions from './AdditionalOptions'

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
  const [displayAdditional, setDisplayAdditional] = useState(false)
  const [ageAndCommute, setAgeAndCommute] = useState({age: null, commute: 0, commutePeriod: "day"})

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

  const handleDisplayOptions = (e) => {
    displayAdditional ? setDisplayAdditional(false) : setDisplayAdditional(true)
  }

  const handleItems = (e) => {

  }
  const handleAddItems = (e) => {

  }
  const handleAgeandCommute = (e) => {
    e.target.name === "commutePeriod" ? 
    setAgeAndCommute({
      ...ageAndCommute,
      [e.target.name]: e.target.value
    })
    :
    setAgeAndCommute({
      ...ageAndCommute,
      [e.target.name]: Number(e.target.value)
    })
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    let costsArray = []
    costsArray.push(coffeeCost, eatingOutCost)
    
    let totHours
    ageAndCommute.commutePeriod === "day" ? 
    totHours = hoursWorkedPerWeek + (ageAndCommute.commute * 5)
    : totHours = hoursWorkedPerWeek + ageAndCommute.commute

    const financials = {
      ...{income}, 
      ...{incomePeriod}, 
      ...{savings}, 
      ...{savingsPeriod}, 
      ...{hoursWorkedPerWeek: totHours},
      ...{currentSavings},
      age: ageAndCommute.age
    }

    dispatch(updateFrequency(costsArray))
    dispatch(setCompareCosts(JSON.parse(JSON.stringify(costsArray)))) // creating a deep copy because otherwise the compare costs state will reference the same array and changing one will change the other!
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

          <input type="number" name="income" className="input" placeholder="Enter your income" defaultValue={income}
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

          <input type="number" name="average-savings" className="input" placeholder="Estimate save" defaultValue={savings}
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

          <input type="number" name="current-savings" className="input" placeholder="Enter how much you already have saved here" defaultValue={currentSavings}
            onChange={handleCurrentSavings}></input>
        </div>
        
        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">How many hours per week do you work?</label>
          </strong>

          <input type="number" name="hours-worked" className="input" placeholder="Working hours weekly" defaultValue={hoursWorkedPerWeek}
            onChange={handleHoursInput}></input>

        </div>

        {/* //LOU - MAKE SURE TO PREVENT NEGATIVE NUMBERS */}
        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">
              How often do you buy coffee per week?
            </label>
          </strong>

          <input type="number" name="coffees" className="input" placeholder="Coffee weekly"
            onChange={handleCoffee}></input>

        </div>
        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">
              How often do you buy lunch/dinner/takeaways per week?
            </label>
          </strong>

          <input type="number" name="food" className="input" placeholder="Eating out" 
            onChange={handleEatingOut}></input>

        </div>
        {displayAdditional && 
        <div className='additional-options'>
          <form>
            <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
              <strong>
                <label className="mr-2">
                  How old are you in years?
                </label>
              </strong>
              <input type="number" name="age" className="input"  
                onChange={handleAgeandCommute}></input>
            </div>
            <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
              <strong>
                <label className="mr-2">
                  How many hours do you spend commuting to work?
                </label>
              </strong>
              <input type="number" name="commute" className="input"  
                onChange={handleAgeandCommute}></input>
              <select name="commutePeriod" onChange={handleAgeandCommute} defaultValue={ageAndCommute.commutePeriod}>
                <option  value="day">Day</option>
                <option value="week">Week</option>
              </select>
            </div>
            <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
              <strong>
                <p>Have other expenses you want to factor in?</p>
                <p>Subscriptions, Car expenses, Rent?</p>
              </strong>
            </div>
            <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
              <strong>
                <label className="mr-2">
                  How often do you spend per week on  
                </label>
              </strong>
              <input type="text" name="newItem" className="input"  
                onChange={handleItems}></input>
              <strong>
                <label className="mr-2">
                  Cost?
                </label>
              </strong>
              <input type="number" name="newItemCost" className="input"  
                onChange={handleItems}></input>
              <button onClick={handleAddItems} type='submit'>Add</button>
            </div>
          </form>
        </div>}

        {!displayAdditional && <button onClick={handleDisplayOptions}>Additional Options</button>}
        {displayAdditional && <button onClick={handleDisplayOptions}>Hide Options</button>}
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
