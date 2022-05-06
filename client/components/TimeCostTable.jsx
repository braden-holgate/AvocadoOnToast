import React from 'react'

function TimeCostTable
() {
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
