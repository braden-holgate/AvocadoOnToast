import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


function TotalExpense () {
  

 
  return (
    <>
      <section className="section has-text-centered is-size-5 ">
        <p>A rule of thumb says that you can live off investment income when your total  investment is 24 x expenses.</p>
        <p className="for-you">For you that is:</p>
        <p className="total-expense">$600,600</p>
      </section>
    </>
  )
}

export default TotalExpense
