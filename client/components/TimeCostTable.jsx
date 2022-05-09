import React from 'react'
import { useSelector } from 'react-redux'
const timeCostObjCreator = require('../moneyCalcs/timeCostCalc')

// timeCostObjCreator(costs[0]), financials)
// returns:
// { 
//   frequencyPerWeek: '3'  
//   item: 'coffee',
//   timeCostPerItem: { timeValue: '11', unit: 'minutes' },
//   timeCostPerWeek: { timeValue: '2.1', unit: 'hours' },
//   timeCostPerYear: { timeValue: '4.6', unit: 'days' }
// }

function TimeCostTable() {
  const costs = useSelector((globalState) => globalState.costs)
  const financials = useSelector((globalState) => globalState.financials)
  // console.log("TIMECOST: ", timeCostObjCreator(costs[0], financials))

  const {income, incomePeriod, savings, savingsPeriod} = financials
  const notNull = income !== null && incomePeriod !== null && savings !== null && savingsPeriod !== null;

  const headers = {
    item: 'Item',
    timeCostPerItem: 'Per Item',
    timeCostPerWeek: 'Weekly',
    timeCostPerYear: 'Yearly',
  }
 
  return (
    <>
      <section className="section columns has-background-white is-centered ">
        <table className="table is-hoverable">
          <thead>
            <tr>
              {Object.values(headers).map((header) => {
                return <th key={header}>{header}</th>
              })}
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
