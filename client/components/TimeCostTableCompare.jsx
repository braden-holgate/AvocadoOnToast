import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCompareCostsFrequency } from '../actions'
const timeCostObjCreator = require('../moneyCalcs/timeCostCalc')

function TimeCostTableCompare() {
  const compareCosts = useSelector((globalState) => globalState.compareCosts)
  const financials = useSelector((globalState) => globalState.financials)

  const dispatch = useDispatch()

  const { income, incomePeriod, savings, savingsPeriod } = financials
  const notNull =
    income !== null &&
    incomePeriod !== null &&
    savings !== null &&
    savingsPeriod !== null

  const handleFreqChange = (id, e) => {
    const frequencyPerWeek = e.target.value
    dispatch(updateCompareCostsFrequency(id, frequencyPerWeek))
  }

  const headers = {
    frequencyPerWeek: 'Number per week',
    item: 'Item',
    timeCostPerItem: 'Per item',
    timeCostPerWeek: 'Weekly',
    timeCostPerYear: 'Yearly',
  }

  return (
    <>
      <section className=" section columns has-background-white is-centered ">
        <table className="table is-hoverable">
          <thead>
            <tr>
              <th rowSpan="2">Number per week</th>
              <th rowSpan="2">Item</th>
              <th colSpan="3" align="center">
                Time spent per:
              </th>
            </tr>
            <tr>
              <th>Item</th>
              <th>Week</th>
              <th>Year</th>
            </tr>
          </thead>

          <tbody>
            {notNull &&
              compareCosts.map((item, index) => {
                const data = timeCostObjCreator(item, financials)
                return (
                  <tr key={index}>
                    {Object.keys(headers).map((key) => {
                      let value
                      if (key === 'item') {
                        value = data[key]
                      } else if (key === 'frequencyPerWeek') {
                        value = (
                          <input
                            type="number"
                            name="frequency-input"
                            className="table-input"
                            defaultValue={data.frequencyPerWeek}
                            onChange={(e) => handleFreqChange(data.id, e)}
                          />
                        )
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

export default TimeCostTableCompare
