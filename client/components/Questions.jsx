import React from 'react'
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

function Questions () {
  return (
    <>

      <div style={{whiteSpace: 'nowrap'}}>
            <strong><label className="mr-2">What is your income?</label></strong>
            <EditText name="income" type="text" style={{width: '200px', margin: '8px', padding: '5px'}} defaultValue="Enter your income here" inline/>
          </div>
      
      <div style={{whiteSpace: 'nowrap'}}>
            <strong><label className="mr-2">How much do you estimate you save?</label></strong>
            <EditText name="average-savings" type="text" style={{width: '200px'}} defaultValue="Enter how much you think you save here" inline/>
          </div>

      <div style={{whiteSpace: 'nowrap'}}>
        <strong><label className="mr-2">How much do you currently have saved?</label></strong>
        <EditText name="current-savings" type="text" style={{width: '200px'}} defaultValue="Enter how much you already have saved here" inline/>
      </div>

      
      {/* single numerical input - we probably need to do Number('user input') */}
      --------------
 {/* //LOU - MAKE SURE TO PREVENT NEGATIVE NUMBERS */}
<div style={{whiteSpace: 'nowrap'}}>
            <strong><label className="mr-2">How often do you buy coffee per week?</label></strong>
            <EditText name="coffees" type="number" style={{width: '200px'}} defaultValue="0" inline/>
          </div>
          <div style={{whiteSpace: 'nowrap'}}>
            <strong><label className="mr-2">How often do you buy lunch/dinner/takeaways per week?</label></strong>
            <EditText name="food" type="number" style={{width: '200px'}} defaultValue="0" inline/>
          </div>
    
   
    </>
  )
}

export default Questions
