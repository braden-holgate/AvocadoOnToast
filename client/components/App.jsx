import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Test from './Test'
import Home from './Home'
import GoalForm from './GoalForm'

function App() {
  return (
    <>
    <div id="wrapper">
      
      <Test />
      <Home />
    </div>
    </>
  )
}

export default App
