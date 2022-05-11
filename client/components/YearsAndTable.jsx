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
        <>
          <section className='section year-and-table columns'>
            <div className="table-left table-description-container card column">
              <div className="content has-text-centered is-size-4">
                Based on your current spending habits...
              </div>
            </div>

            <div className="table-right table-description-container card column">
              <div className="content has-text-centered is-size-4">
                See how much difference a small change can make!
              </div>
            </div>
          </section>

          <section className='section arrow-container columns'>
            <div className="column has-text-centered">
            {/* <div className="section has-text-centered"> */}
                <p className="arrow-left">🠗</p>
              {/* </div> */}
            </div>

            <div className="column has-text-centered">
            {/* <div className="section has-text-centered"> */}
                <p className="arrow-right">🠗</p>
              {/* </div> */}
            </div>
          </section>

          <section className='section year-and-table columns'>
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
      }
    </>
  )
}

// <>
//   {notNull &&
//     <>
//       <section className='section columns'>
{/* <div className="column"> */ }
{/* <div className="table-description-container table-left card">
                <div className="content has-text-centered is-size-4">
                  Based on your current spending habits...
                </div>
              </div>


              <div className="arrow-container section has-text-centered">
                <p className="arrow-left">🠗</p>
              </div> */}

// <div className="table-left card column">
//   <YearsToRetire />
//   <TimeCostTable />
// </div>
{/* </div> */ }

{/* <div className="column"> */ }
{/* <div className="table-description-container table-right card">
                <div className="content has-text-centered is-size-4">
                  See how much difference a small change can make!
                </div>
              </div>


              <div className="arrow-container section has-text-centered">
                <p className="arrow-right">🠗</p>
              </div> */}

//           <div className="table-right card column">
//             <YearsToRetireCompare />
//             <TimeCostTableCompare />
//           </div>
//         {/* </div> */}

//       </section>
//     </>
//   }
// </>
// )
// }

export default YearsAndTable
