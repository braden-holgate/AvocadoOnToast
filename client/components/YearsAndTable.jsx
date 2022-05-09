import React from 'react'
import TimeCostTable from './TimeCostTable'
import TimeCostTableCompare from './TimeCostTableCompare'
import YearsToRetire from './YearsToRetire'


function YearsAndTable() {
  return (
    <>
    <section className='section columns'>
    <div className="table-left card column"> 
      <YearsToRetire />
      <TimeCostTable />
    </div>
      
    <div className="table-right card column"> 
      <YearsToRetire />
      <TimeCostTable />
    </div>
    </section>
      
    </>
  )
}

export default YearsAndTable
