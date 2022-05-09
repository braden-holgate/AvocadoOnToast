import React from 'react'
import { useSelector } from 'react-redux'

function Barchart () {
  const financials = useSelector(state => state.financials)
  const {income, incomePeriod, savings, savingsPeriod, currentSavings} = financials

  useEffect(() => {
      setYears(util.yearsToRetirement(income, incomePeriod, savings, savingsPeriod, currentSavings))
  }, [financials])
  
  return (
    <>
  
      <section className="hero has-background-light ">
        <div className="">
          <figure className="barchart image columns is-flex is-centered">
            <img className="banner" src="images/barchart.png" />
          </figure>
        </div>    
      
      </section>

    </>
  )
}

export default Barchart
