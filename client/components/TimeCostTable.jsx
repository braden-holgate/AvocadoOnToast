import React from 'react'
import { useSelector } from 'react-redux'
const timeCostObjCreator = require('../moneyCalcs/timeCostCalc')

// timeCostObjCreator(costs[0]), financials)
// returns:
// {
//   item: 'coffee',
//   timeCostPerItem: { timeValue: '11', unit: 'minutes' },
//   timeCostPerWeek: { timeValue: '2.1', unit: 'hours' },
//   timeCostPerYear: { timeValue: '4.6', unit: 'days' }
// }

function TimeCostTable() {
  const costs = useSelector((globalState) => globalState.costs)
  const financials = useSelector((globalState) => globalState.financials)
  // console.log("costs", costs)
  // console.log("finan",financials)

  console.log( "=======",timeCostObjCreator(costs[0], financials))

  const headers = {
    item: 'Item',
    timeCostPerItem: 'Per Item',
    timeCostPerWeek: 'Weekly',
    timeCostPerYear: 'Yearly',
  }
  const data = [
    {
      item: 'coffee',
      timeCostPerItem: { timeValue: '11', unit: 'minutes' },
      timeCostPerWeek: { timeValue: '2.1', unit: 'hours' },
      timeCostPerYear: { timeValue: '4.6', unit: 'days' },
    },
    {
      item: 'eating out',
      timeCostPerItem: { timeValue: '22', unit: 'minutes' },
      timeCostPerWeek: { timeValue: '33', unit: 'hours' },
      timeCostPerYear: { timeValue: '44', unit: 'days' },
    },
  ]
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
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  {Object.keys(headers).map((key) => {
                    let value
                    if (key === 'item') {
                      value = item[key]
                    } else {
                      const obj = item[key]
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
