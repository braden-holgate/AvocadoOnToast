import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Questions from './Questions'
import TimeCostTable from './TimeCostTable'
import Welcome from './Welcome'
import YearsToRetire from './YearsToRetire'
import Runningman from './Runningman'
import YearsAndTable from './YearsAndTable'
import TotalExpense from './TotalExpense'
import Barchart from './Barchart'
import Subscribe from './Subscribe'
import UserUpdateTable from './UserUpdateTable'
import Message2 from './Message2'

function Home() {
  return (
    <>
      <Nav />
      {/* <Welcome /> */}
      <Runningman/>
      <Message2 />
      <Questions />
      <YearsAndTable/>
      <TotalExpense/>
      <Barchart/>
      <Subscribe/>
      <Footer />
    </>
  )
}

export default Home
