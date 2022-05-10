import React, { useEffect } from 'react'
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
//   id: 1
// }

function TimeCostTable() {
  const costs = useSelector((globalState) => globalState.costs)
  const financials = useSelector((globalState) => globalState.financials)

  const {income, incomePeriod, savings, savingsPeriod} = financials
  const notNull = income !== null && incomePeriod !== null && savings !== null && savingsPeriod !== null;
  
  useEffect(() => {
    console.log(costs)
  }, [costs])


  const headers = {
    frequencyPerWeek:'Number per week',
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
                    } else if(key==='frequencyPerWeek'){
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
