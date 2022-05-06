import React from 'react'

function TimeCostTable
() {
  const headers={item:"Item",perItem:"Per Item",weekly:"Weekly",yearly:"Yearly"}
  const data=[{item:"Coffee",perItem:"5",weekly:"35",yearly:"150"}]
  return (
    <>
      <section className="section columns has-background-white is-centered ">
        <table className="table is-hoverable ">
          <thead>
           {
             Object.values(headers).map(header=>{
               return(<th key={header}>{header}</th>)
             })
           }
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
