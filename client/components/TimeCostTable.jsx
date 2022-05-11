import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
const timeCostObjCreator = require('../moneyCalcs/timeCostCalc')

function TimeCostTable() {
  const costs = useSelector((globalState) => globalState.costs)
  const financials = useSelector((globalState) => globalState.financials)

  const { income, incomePeriod, savings, savingsPeriod } = financials
  const notNull = income !== null && incomePeriod !== null && savings !== null && savingsPeriod !== null;


  const timeCostObj = timeCostObjCreator(costs[0], financials)
  console.log(timeCostObj)
  const realWage = (timeCostObj.dollarsPerMinute * 60).toFixed(2)


  const headers = {
    frequencyPerWeek: 'Number per week',
    item: 'Item',
    timeCostPerItem: 'Per item',
    timeCostPerWeek: 'Weekly',
    timeCostPerYear: 'Yearly',
  }

  return (
    <>

      <section className="section columns has-background-white is-centered ">
        <table className="table is-hoverable">
          <thead>
            <tr>
              <th colSpan="5" align="center"><p className="realWage"><em>{`Based on your real wage of $${realWage} per hour`}</em></p></th>
            </tr>
            <tr>
              <th rowSpan="2">Number per week</th>
              <th rowSpan="2">Item</th>
              <th colSpan="3" align="center">Time spent per:</th>
            </tr>
            <tr>
              <th>Item</th>
              <th>Week</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {notNull && costs.map((item, index) => {
              const data = timeCostObjCreator(item, financials);
              return (
                <tr key={index}>
                  {Object.keys(headers).map((key) => {
                    let value
                    if (key === 'item') {
                      value = data[key]
                    } else if (key === 'frequencyPerWeek') {
                      value = data.frequencyPerWeek
                    } else {
                      const obj = data[key]
                      value = obj.timeValue + ' ' + obj.unit
                    }

                    return <td key={key}>{value}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </>
  )
}

export default TimeCostTable
