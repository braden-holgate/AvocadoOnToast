import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadFinancials, getCosts, setCompareCosts, setCosts } from '../actions'
import UserUpdateTable from './UserUpdateTable'

function Questions() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.costs)

  const [income, setIncome] = useState(null)
  const [incomePeriod, setIncomePeriod] = useState('week')
  const [currentSavings, setCurrentSavings] = useState(null)
  const [savings, setSavings] = useState(null)
  const [savingsPeriod, setSavingsPeriod] = useState('week')
  const [hoursWorkedPerWeek, setHoursWorkedPerWeek] = useState(null)
  const [displayAdditional, setDisplayAdditional] = useState(false)
  const [displayEdit, setDisplayEdit] = useState(false)
  const [ageAndCommute, setAgeAndCommute] = useState({
    age: null,
    commute: 0,
    commutePeriod: 'day',
  })
  const [newItem, setNewItem] = useState({
    item: '',
    cost: '',
    frequencyPerWeek: '',
  })
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
    displayAdditional ? setDisplayEdit(false) : null
  }

  const handleDisplayEdit = (e) => {
    displayEdit ? setDisplayEdit(false) : setDisplayEdit(true)
  }

  const handleItems = (e) => {
    e.target.name === 'item'
      ? setNewItem({
          id: items.length + 1,
          ...newItem,
          [e.target.name]: e.target.value,
        })
      : setNewItem({
          id: items.length + 1,
          ...newItem,
          [e.target.name]: Number(e.target.value),
        })
  }
  const handleAddItems = (e) => {
    e.preventDefault()
    let notNull =
      newItem.item !== '' &&
      newItem.cost !== '' &&
      newItem.frequencyPerWeek !== ''
    if (notNull) {
      let newItemArray = [...items, newItem]
      dispatch(setCosts(newItemArray))
      dispatch(setCompareCosts(JSON.parse(JSON.stringify(newItemArray))))
      setNewItem({ item: '', cost: '', frequencyPerWeek: '' })
      setNewItemAlert(false)
    } else {
      setNewItemAlert(true)
    }
  }

  const handleAgeAndCommute = (e) => {
    e.target.name === 'commutePeriod'
      ? setAgeAndCommute({
          ...ageAndCommute,
          [e.target.name]: e.target.value,
        })
      : setAgeAndCommute({
          ...ageAndCommute,
          [e.target.name]: Number(e.target.value),
        })
  }

  const handleCalculate = (e) => {
    e.preventDefault()

    let totHours
    ageAndCommute.commutePeriod === 'day'
      ? (totHours = hoursWorkedPerWeek + ageAndCommute.commute * 5)
      : (totHours = hoursWorkedPerWeek + ageAndCommute.commute)

    const financials = {
      ...{ income },
      ...{ incomePeriod },
      ...{ savings },
      ...{ savingsPeriod },
      ...{ hoursWorkedPerWeek: totHours },
      ...{ currentSavings },
      age: ageAndCommute.age,
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
          

          <select  className='dropdown' onChange={incomeFrequency} defaultValue='week'>
            <option  value="week">Week</option>
            <option value="fortnight">Fortnight</option>
            <option value="year">Year</option>
          </select>
          <span data-tooltip="This is your NZD pay before tax and kiwisaver."><img className="tooltip-icon" src="/images/tooltip.png"></img></span>
          </div>

        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">How much do you estimate you save?</label>
          </strong>

          <input
            type="number"
            min="0"
            name="average-savings"
            className="input"
            placeholder="Estimate save"
            defaultValue={savings}
            onChange={handleSavings}
          ></input>

          <select
            className="dropdown"
            onChange={savingFrequency}
            defaultValue="week"
          >
            <option value="week">Week</option>
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
            type="number"
            min="0"
            name="current-savings"
            className="input"
            placeholder="Enter how much you already have saved here"
            defaultValue={currentSavings}
            onChange={handleCurrentSavings}
          ></input>
        </div>

        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">How many hours per week do you work?</label>
          </strong>

          <input
            type="number"
            min="0"
            name="hours-worked"
            className="input"
            placeholder="Working hours weekly"
            defaultValue={hoursWorkedPerWeek}
            onChange={handleHoursInput}
          ></input>
        </div>

        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">
              How often do you buy coffee per week?
            </label>
          </strong>

          <input
            type="number"
            min="0"
            name="coffees"
            className="input"
            placeholder="Coffee weekly"
            onChange={handleCoffee}
          ></input>
        </div>
        <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
          <strong>
            <label className="mr-2">
              How often do you buy lunch/dinner/takeaways per week?
            </label>
          </strong>

          <input
            type="number"
            min="0"
            name="food"
            className="input"
            placeholder="Eating out"
            onChange={handleEatingOut}
          ></input>
        </div>
        {displayAdditional && 
        <div className='additional-options'>
          {displayAdditional && <button className='additional-option' onClick={handleDisplayOptions}>Hide Options</button>}
          
          <br></br>
          <div className="is-divider" data-content="Additional Options make things a little more useful"></div>
          <br></br>
          <form>
            <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
              <strong>
                <label className="mr-2">
                  How old are you in years?
                </label>
              </strong>
              <input type="number" min="0" name="age" className="input"  
                onChange={handleAgeAndCommute}></input>
            </div>
            <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
              <strong>
                <label className="mr-2">
                  How many hours do you spend commuting to work?
                </label>
              </strong>
              <input type="number" min="0" name="commute" className="input"  
                onChange={handleAgeAndCommute}></input>
              <select className='dropdown' name="commutePeriod" onChange={handleAgeAndCommute} defaultValue={ageAndCommute.commutePeriod}>
                <option  value="day">Day</option>
                <option value="week">Week</option>
              </select>
              <span className="has-tooltip-multiline" data-tooltip="We include this in the calculation of you real hourly wage."><img className="tooltip-icon" src="/images/tooltip.png"></img></span>
            </div>
            <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
              <strong>
                <p>Have other expenses you want to factor in?</p>
                <p>Subscriptions, Car expenses, Rent?</p>
              </strong>
            </div>
            <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
              <strong>
                <label className="mr-2 expense-input">
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
              <button className='additional-option' onClick={handleAddItems} type='submit'>Add</button>
            </div>
            {newItemAlert && <div><p>Please fill in all fields before clicking "Add"</p><br></br></div>}
          </form>
          <div className="is-divider" data-content="Expenses"></div>
          {!displayEdit && <button className='additional-option' onClick={handleDisplayEdit}>Edit expenses</button>}
        </div>}

        {displayEdit && <div>
          <UserUpdateTable displayEdit={displayEdit} setDisplayEdit={setDisplayEdit}/>
        </div>}

        {!displayAdditional && <button className='additional-option' onClick={handleDisplayOptions}>Additional Options</button>}
        <br></br>
        <button
          className="question-button"
          onClick={handleCalculate}
          type="submit"
        >
          Calculate
        </button>
      </section>
    </>
  )
}

export default Questions
