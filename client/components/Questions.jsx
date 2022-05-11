
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadFinancials, updateFrequency, getCosts, setCompareCosts, setCosts } from '../actions'
import UserUpdateTable from './UserUpdateTable'

function Questions() {

  const dispatch = useDispatch()
  const items = useSelector(state => state.costs)
  const [income, setIncome] = useState(null)
  const [incomePeriod, setIncomePeriod] = useState('week')
  const [currentSavings, setCurrentSavings] = useState(null)
  const [savings, setSavings] = useState(null)
  const [savingsPeriod, setSavingsPeriod] = useState('week')
  const [hoursWorkedPerWeek, setHoursWorkedPerWeek] = useState(null)
  const [displayAdditional, setDisplayAdditional] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)
  const [ageAndCommute, setAgeAndCommute] = useState({age: null, commute: 0, commutePeriod: "day"})
  const [newItem, setNewItem] = useState({item: "", cost: "", frequencyPerWeek: ""})
  const [newItemAlert, setNewItemAlert] = useState(false)

  useEffect(() => {
  dispatch(getCosts())
  }, [])

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
    items[0].frequencyPerWeek = e.target.value
  }

  const handleEatingOut = (e) => {
    items[1].frequencyPerWeek = e.target.value
  }

  const handleDisplayOptions = (e) => {
    displayAdditional ? setDisplayAdditional(false) : setDisplayAdditional(true)
  }

  const handleDisplayEdit = (e) => {
    displayEdit ? setDisplayEdit(false) : setDisplayEdit(true)
  }

  const handleItems = (e) => {
    e.target.name === 'item' ?
    setNewItem({
      id: (items.length + 1),
      ...newItem,
      [e.target.name]: e.target.value
    })
    :
    setNewItem({
      id: (items.length + 1),
      ...newItem,
      [e.target.name]: Number(e.target.value)
    })
  }
  const handleAddItems = (e) => {
    e.preventDefault()
    let notNull = newItem.item !== "" && newItem.cost !== "" && newItem.frequencyPerWeek !== ""
    if (notNull) {
    let newItemArray = [...items, newItem]
    dispatch(setCosts(newItemArray))
    dispatch(setCompareCosts(JSON.parse(JSON.stringify(newItemArray))))
    setNewItem({item: "", cost: "", frequencyPerWeek: ""})
    setNewItemAlert(false)
    } else {setNewItemAlert(true)}
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

    dispatch(setCosts(items))
    dispatch(setCompareCosts(items))
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

          <input type="number" min="0" name="income" className="input" placeholder="Enter your income" defaultValue={income}
            onChange={handleIncome}></input>
          

          <select  className='dropdown' onChange={incomeFrequency}defaultValue='year'>
            <option  value="week">Week</option>
            <option value="fortnight">Fortnight</option>
            <option value="year">Year</option>
          </select>
        </div>

        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">How much do you estimate you save?</label>
          </strong>

          <input type="number" min="0" name="average-savings" className="input" placeholder="Estimate save" defaultValue={savings}
            onChange={handleSavings}></input>

          <select className='dropdown' onChange={savingFrequency} defaultValue={savingsPeriod}>
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

          <input type="number" min="0" name="current-savings" className="input" placeholder="Enter how much you already have saved here" defaultValue={currentSavings}
            onChange={handleCurrentSavings}></input>
        </div>
        
        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">How many hours per week do you work?</label>
          </strong>

          <input type="number" min="0" name="hours-worked" className="input" placeholder="Working hours weekly" defaultValue={hoursWorkedPerWeek}
            onChange={handleHoursInput}></input>
        </div>

        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">
              How often do you buy coffee per week?
            </label>
          </strong>

          <input type="number" min="0" name="coffees" className="input" placeholder="Coffee weekly"
            onChange={handleCoffee}></input>

        </div>
        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">
              How often do you buy lunch/dinner/takeaways per week?
            </label>
          </strong>

          <input type="number" min="0" name="food" className="input" placeholder="Eating out" 
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
              <input type="number" min="0" name="age" className="input"  
                onChange={handleAgeandCommute}></input>
            </div>
            <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
              <strong>
                <label className="mr-2">
                  How many hours do you spend commuting to work?
                </label>
              </strong>
              <input type="number" min="0" name="commute" className="input"  
                onChange={handleAgeandCommute}></input>
              <select className='dropdown' name="commutePeriod" onChange={handleAgeandCommute} defaultValue={ageAndCommute.commutePeriod}>
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
                  Expense name:  
                </label>
              </strong>
              <input type="text" name="item" className="input" value={newItem.item} 
                onChange={handleItems}></input>
              <strong>
                <label className="mr-2">
                  How often per week?
                </label>
              </strong>
              <input type="number" min="0" name="frequencyPerWeek" className="input" value={newItem.frequencyPerWeek} 
                onChange={handleItems}></input>
              <strong>
                <label className="mr-2">
                  Cost?
                </label>
              </strong>
              <input type="number" min="0" name="cost" className="input" value={newItem.cost}
                onChange={handleItems}></input>
              <button onClick={handleAddItems} type='submit'>Add</button>
            </div>
            {newItemAlert && <p>Please fill in all fields before clicking "Add"</p>}
          </form>
        </div>}

        {displayEdit && <div>
          <UserUpdateTable />
        </div>}


        {!displayAdditional && <button className='additional-option' onClick={handleDisplayOptions}>Additional Options</button>}
        {displayAdditional && <button className='additional-option' onClick={handleDisplayOptions}>Hide Options</button>}
        
        {!displayEdit && <button className='additional-option' onClick={handleDisplayEdit}>Edit expenses</button>}
        {displayEdit && <button className='additional-option' onClick={handleDisplayEdit}>Hide expenses</button>}
        
        <br></br>
        <button className='question-button' onClick={handleCalculate} type='submit'>Calculate</button>
       
          
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
