import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Questions from './Questions'
import TimeCostTable from './TimeCostTable'
import Welcome from './Welcome'
import YearsToRetire from './YearsToRetire'
import Runningman from './Runningman'

function Home() {
  return (
    <>
      <Nav />
      <Welcome />
      <Runningman/>
      <Questions />
      <YearsToRetire />
      <TimeCostTable />
      <section className='section above-footer'>
       <br />
      </section>
      <Footer />
    </>
  )
}

export default Home
