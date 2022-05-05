import React from 'react'
import { EditText } from 'react-edit-text'
import 'react-edit-text/dist/index.css'
import 'bulma/css/bulma.min.css'
import { Dropdown, Icon } from 'react-bulma-components'

function Questions () {
  function incomeFrequency () {
    console.log(value, 'this is dropdown value')
  }
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

      <div
        style={{ whiteSpace: 'nowrap', marginBottom: '25px', marginTop: '25px' }}>
        <strong><label className="mr-2">What is your income?</label></strong>
        <EditText
          name="income"
          type="text"
          style={{ width: '200px', padding: '5px', border: '1px solid #ccc' }}
          placeholder="0.00"
          defaultValue='' inline
        />
        <select>
          <option selected value="week">
          Week
          </option>
          <option value="fortnight">Fortnight</option>
          <option value="year">Year</option>
        </select>

        {/* still exploring best way to add dropdown and capture value */}

        {/* <Dropdown onChange={() => (incomeFrequency.value)}
              closeOnSelect={true}
              color=""
              icon={<Icon><i aria-hidden="true" className="fas fa-angle-down"/></Icon>}
              label="Select frequency">
              <Dropdown.Item
                renderAs="a"
                value="week"
              >
              Week
              </Dropdown.Item>
              <Dropdown.Item
                renderAs="a"
                value="month"
              >
                Month
              </Dropdown.Item>
              <Dropdown.Item
                renderAs="a"
                value="year"
              >
                Year
              </Dropdown.Item>
            </Dropdown> */}
      </div>

      <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
        <strong><label className="mr-2">How much do you estimate you save?</label></strong>
        <EditText name="average-savings" type="text" style={{ width: '200px', padding: '5px', border: '2px solid #ccc' }} placeholder="Enter how much you think you save here" defaultValue='' inline/>
      </div>

      <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
        <strong><label className="mr-2">How much do you currently have saved?</label></strong>
        <EditText name="current-savings" type="text" style={{ width: '200px', padding: '5px', border: '2px solid #ccc' }}placeholder='Enter how much you already have saved here' defaultValue='' inline/>
      </div>
      {/* single numerical input - we probably need to do `Number('user input')` */}
      --------------
      {/* //LOU - MAKE SURE TO PREVENT NEGATIVE NUMBERS */}
      <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
        <strong><label className="mr-2">How often do you buy coffee per week?</label></strong>
        <EditText name="coffees" type="number" style={{ width: '200px', padding: '5px', border: '2px solid #ccc' }} placeholder='Enter your average weekly coffee count' defaultValue="" inline/>
      </div>
      <div style={{ whiteSpace: 'nowrap', marginBottom: '25px' }}>
        <strong><label className="mr-2">How often do you buy lunch/dinner/takeaways per week?</label></strong>
        <EditText name="food" type="number" style={{ width: '200px', padding: '5px', border: '2px solid #ccc' }} placeholder='Enter your weekly takeout count' defaultValue='' inline/>
      </div>

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
