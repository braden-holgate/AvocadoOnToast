import React from 'react'
import TimeCostTable from './TimeCostTable'
import TimeCostTableCompare from './TimeCostTableCompare'
import YearsToRetire from './YearsToRetire'
import YearsToRetireCompare from'./YearsToRetireCompare'


function YearsAndTable() {
  return (
    <>
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
      
    </>
  )
}

export default YearsAndTable
