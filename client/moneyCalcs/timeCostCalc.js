const utils = require('./utils')

// this function is set up to receive an item costs object and a financials object from global state

// test costs object 
const costs = {
  id: 1,
  item: 'coffee',
  cost: 5,
  frequencyPerWeek: 3,
}

// test financials object
const financials = {
  income: 3000,
  incomePeriod: 'fortnight',
  currentSavings: 500,
  savings: 50,
  savingsPeriod: 'week',
  hoursWorkedPerWeek: 40 
}

function timeCostObjCreator(itemCostsObj, financialsObj) {
  ({ id, item, cost, frequencyPerWeek } = itemCostsObj);
  ({ income, incomePeriod, hoursWorkedPerWeek } = financialsObj);

  console.log(id, item, cost, frequencyPerWeek);
  console.log( income, incomePeriod, hoursWorkedPerWeek);


  return null //{
  //   item: item,
  //   timeCostPerItem: null,
  //   timeCostPerWeek: null,
  //   timeCostPerYear: null
  // }
}

// timeCostObjCreator(costs, financials)

function timeValuePerMinute(income, incomePeriod, hoursWorkedPerWeek) {

  const annualAfterTaxIncome = utils.afterTaxIncomePerYear(income, incomePeriod)
  
  console.log(annualAfterTaxIncome)

  const weeklyIncomeAfterTax = annualAfterTaxIncome / 52
  const dollarsPerHour = weeklyIncomeAfterTax / hoursWorkedPerWeek
  // console.log(dollarsPerHour)
  const dollarsPerMinute = dollarsPerHour / 60
  return dollarsPerMinute
}

console.log(timeValuePerMinute(3000, 'fortnight', 40))

function timeCostPerItem(timeValuePerMinute, cost) {
  return 

}

function timeCostPerWeek(item) {}

function timeCostPerYear(item) {}

// console.log(utils.salaryPerYear(3000, 'fortnight'))
// console.log(utils.afterTaxIncomePerYear(90000))

module.exports = timeCostObjCreator
