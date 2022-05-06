import React from 'react'
import { useSelector } from 'react-redux'
const timeCostObjCreator = require('../moneyCalcs/timeCostCalc')

// timeCostObjCreator(costs[0]), financials)
// returns:
// {
//   item: 'coffee',
//   timeCostPerItem: { timeValue: '11', unit: 'minutes' },
//   timeCostPerWeek: { timeValue: '2.1', unit: 'hours' },
//   timeCostPerYear: { timeValue: '4.6', unit: 'days' }
// }




function TimeCostTable
() {

  const costs = useSelector(globalState => globalState.costs)
  const financials = useSelector(globalState => globalState.financials)
  // console.log(costs)
  // console.log(financials)

  const headers={item:"Item",timeCostPerItem:"Per Item",timeCostPerWeek:"Weekly",timeCostPerYear:"Yearly"}
  const data=[{item:"Coffee",timeCostPerItem:"5",timeCostPerWeek:"35",timeCostPerYear:"150"}]
  return (
    <>
      <section className="section columns has-background-white is-centered ">
        <table className="table is-hoverable">
          <thead>
          <tr>
           {
             Object.values(headers).map(header=>{
               
               return(
               <th key={header}>{header}</th>)
             })

           }
           </tr>
          </thead>

          <tbody>
            {
              data.map((item,index)=>{
                return(
                  <tr key={index}>
                  {
                    Object.keys(headers).map(key=>{
                      return(
                        <td key={key}>{item[key]}</td>
                      )
                    })
                  }
                  </tr>
                )
              
              })
            }
           
          </tbody>
        </table>
      </section>
    </>
  )
}

export default TimeCostTable
