import React from 'react'
import Nav from './Nav'
import Questions from './Questions'
import TimeCostTable from './TimeCostTable'
import Welcome from './Welcome'
import YearsToRetire from './YearsToRetire'

function App () {
  return (
    <>
      <header className="header">
        <h1>Money days</h1>
      </header>
      <section className="main">
        <Nav />
        <Welcome />
        <Questions />
        <YearsToRetire />
        <TimeCostTable />
        
      </section>
    </>
  )
}

export default App
