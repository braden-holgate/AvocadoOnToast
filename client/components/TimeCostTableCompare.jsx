import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCompareCostsFreqency } from '../actions'
const timeCostObjCreator = require('../moneyCalcs/timeCostCalc')

// TODO:
// add form boxes
// add click handler that dispatches updateCompareCostsFreqency(id, frequencyPerWeek)
 
function TimeCostTableCompare() {
  const dispatch = useDispatch()

  const compareCosts = useSelector((globalState) => globalState.compareCosts)
  const financials = useSelector((globalState) => globalState.financials)

  const {income, incomePeriod, savings, savingsPeriod} = financials
  const notNull = income !== null && incomePeriod !== null && savings !== null && savingsPeriod !== null;
  
  const handleFreqChange = (id, e) => {
    const frequencyPerWeek = e.target.value
    dispatch(updateCompareCostsFreqency(id, frequencyPerWeek))
  }

  const headers = {
    frequencyPerWeek:'Frequency Weekly',
    item: 'Item',
    timeCostPerItem: 'Per Item',
    timeCostPerWeek: 'Weekly',
    timeCostPerYear: 'Yearly',
  }
 
  return (
    <>
      <section className=" section columns has-background-white is-centered ">
        <table className="table is-hoverable">
          <thead>
            <tr>
              {Object.values(headers).map((header) => {
                return <th key={header}>{header}</th>
              })}
            </tr>
          </thead>

          <tbody>
            {notNull && compareCosts.map((item, index) => {
              const data = timeCostObjCreator(item, financials);
              return (
                <tr key={index}>
                  {Object.keys(headers).map((key) => {
                    let value
                    if (key === 'item') {
                      value = data[key]
                    } else if(key==='frequencyPerWeek'){
                      value=<input type='number' name='frequency-input' className='table-input' defaultValue={data.frequencyPerWeek} onChange={(e) => handleFreqChange(data.id, e)}/>
                    }
                    else {
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
