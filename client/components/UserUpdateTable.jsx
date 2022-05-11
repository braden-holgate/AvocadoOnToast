import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCompareCosts, setCosts } from '../actions'

function UserUpdateTable() {
  const dispatch = useDispatch()

  const costs = useSelector((globalState) => globalState.costs)
  console.log(costs)

  const [costsArr, setCostsArr] = useState(costs)

  const handleFreqChange = (id, e) => {
    const frequencyPerWeek = e.target.value
    costs.map((itemObj) => {
      if (itemObj.id == id) {
        itemObj.frequencyPerWeek = frequencyPerWeek
      }
    })
    setCostsArr(costs)
  }

  const handleItemChange = (id, e) => {
    const item = e.target.value
    costs.map((itemObj) => {
      if (itemObj.id == id) {
        itemObj.item = item
      }
    })
    setCostsArr(costs)
  }

  const handleCostChange = (id, e) => {
    const cost = e.target.value
    costs.map((itemObj) => {
      if (itemObj.id == id) {
        itemObj.cost = cost
      }
    })
    setCostsArr(costs)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(setCosts(costsArr))
    dispatch(setCompareCosts(costsArr))

    // dispatch(setCosts(JSON.parse(JSON.stringify(costsArr))))
    // dispatch(setCompareCosts(JSON.parse(JSON.stringify(costsArr))))
  }


  const headers = {
    item: 'Item',
    frequencyPerWeek: 'Number per week',
    costPerItem: 'Cost per item'
  }

  return (
    <>
      <section className=" section columns has-background-white is-centered ">
        <table className="table is-hoverable">
          <thead>
            <tr>
              {Object.values(headers).map((header) => {
                return <th key={header}>{header}</th>
              })}
            </tr>
          </thead>

          <tbody>
            {costs.map((itemObj, index) => {
              return (
                <tr key={index}>
                  {Object.keys(headers).map((key) => {
                    // console.log(itemObj)
                    let value
                    if (key === 'item') {
                      value = <input type='text' name='item-name' className='table-input' defaultValue={itemObj.item} onChange={(e) => handleItemChange(itemObj.id, e)} />
                    } else if (key === 'frequencyPerWeek') {
                      value = <input type='number' name='frequency-input' className='table-input' defaultValue={itemObj.frequencyPerWeek} onChange={(e) => handleFreqChange(itemObj.id, e)} />
                    }
                    else if (key === 'costPerItem') {
                      value = <input type='text' name='cost-per-item' className='table-input' defaultValue={itemObj.cost} onChange={(e) => handleCostChange(itemObj.id, e)} />
                    }

                    return <td key={key}>{value}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <div>
          <button onClick={handleSubmit} type='submit'>Submit changes</button>
        </div>
      </section>
    </>
  )
}

export default UserUpdateTable