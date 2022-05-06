import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Questions from './Questions'
import TimeCostTable from './TimeCostTable'
import Welcome from './Welcome'
import YearsToRetire from './YearsToRetire'

function Home() {
  return (
    <>
      <Nav />
      <Welcome />
      <Questions />
      <YearsToRetire />
      <TimeCostTable />
      <Footer />
    </>
  )
}

export default Home
