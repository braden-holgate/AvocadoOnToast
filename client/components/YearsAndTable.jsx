import React from 'react'
import { useSelector } from 'react-redux'
import TimeCostTable from './TimeCostTable'
import TimeCostTableCompare from './TimeCostTableCompare'
import YearsToRetire from './YearsToRetire'
import YearsToRetireCompare from './YearsToRetireCompare'


function YearsAndTable() {
  const financials = useSelector(state => state.financials)
  const { income, incomePeriod, savings, savingsPeriod } = financials

  const notNull = income !== null && incomePeriod !== null && savings !== null && savingsPeriod !== null;

  return (

    <>
      {notNull &&
        <section className='section columns'>
          <div className="table-left card column">
            <YearsToRetire />
            <TimeCostTable />
          </div>

          <div className="table-right card column">
            <YearsToRetireCompare />
            <TimeCostTableCompare />
          </div>
        </section>
      }
    </>
  )
}

export default YearsAndTable
