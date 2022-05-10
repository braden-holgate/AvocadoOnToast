const utils = require('./utils')

// this function is set up to receive an item costs object and a financials object from global state

// test costs object 
// const costs = {
//   id: 1,
//   item: 'coffee',
//   cost: 5,
//   frequencyPerWeek: 12,
// }

// test financials object
// const financials = {
//   income: 3000,
//   incomePeriod: 'fortnight',
//   currentSavings: 500,
//   savings: 50,
//   savingsPeriod: 'week',
//   hoursWorkedPerWeek: 40 
// }

function timeCostObjCreator(itemCostsObj, financialsObj) {
  ({ id, item, cost, frequencyPerWeek } = itemCostsObj);
  ({ income, incomePeriod, hoursWorkedPerWeek } = financialsObj);

  const minutesPerItem = timeCostPerItem(income, incomePeriod, hoursWorkedPerWeek, cost)
  const minutesPerWeek = timeCostPerWeek(minutesPerItem, frequencyPerWeek)
  const minutesPerYear = timeCostPerYear(minutesPerWeek)

  return {
    item,
    timeCostPerItem: determineUnit(minutesPerItem),
    timeCostPerWeek: determineUnit(minutesPerWeek),
    timeCostPerYear: determineUnit(minutesPerYear),
    frequencyPerWeek,
    id
  }
}
// console.log(timeCostObjCreator(costs, financials))

// the below function takes an input in minutes
function determineUnit(timeInMinutes) {
  const timeCostObj = {
    timeValue: null,
    unit: null
  }
  const minutesInHour = 60 // 1 hour in minutes
  const minutesInDay = 24 * minutesInHour // 1 day in minutes
  const minutesInWeek = 7 * minutesInDay // 1 week in minutes

  if (timeInMinutes > minutesInWeek) {
    timeCostObj.timeValue = (timeInMinutes / minutesInWeek).toFixed(1)
    timeCostObj.unit = 'weeks'
  } 
  else if (timeInMinutes > minutesInDay) {
    timeCostObj.timeValue = (timeInMinutes / minutesInDay).toFixed(1)
    timeCostObj.unit = 'days'
  }
  else if (timeInMinutes > minutesInHour) {
    timeCostObj.timeValue = (timeInMinutes / minutesInHour).toFixed(1)
    timeCostObj.unit = 'hours'
  }
  else {
    timeCostObj.timeValue = timeInMinutes.toFixed(0)
    timeCostObj.unit = 'minutes'
  }
  return timeCostObj
}

function timeValuePerMinute(income, incomePeriod, hoursWorkedPerWeek) {
  const annualAfterTaxIncome = utils.afterTaxIncomePerYear(income, incomePeriod)
  const weeklyIncomeAfterTax = annualAfterTaxIncome / 52
  const dollarsPerHour = weeklyIncomeAfterTax / hoursWorkedPerWeek
  const dollarsPerMinute = dollarsPerHour / 60
  return dollarsPerMinute
}
// console.log('dollars per minute: ', timeValuePerMinute(3000, 'fortnight', 40))

function timeCostPerItem(income, incomePeriod, hoursWorkedPerWeek, cost) {
  const dollarsPerMinute = timeValuePerMinute(income, incomePeriod, hoursWorkedPerWeek)
  const minutesPerItem = cost/dollarsPerMinute
  return minutesPerItem
  // return Math.round(minutesPerItem)
}
// console.log('Time cost per item: ', timeCostPerItem(3000, 'fortnight', 40, 5))

function timeCostPerWeek(minutesPerItem, frequencyPerWeek) {
  const minutesPerWeek = minutesPerItem * frequencyPerWeek
  return minutesPerWeek
}
// console.log('Time cost per week: ', timeCostPerWeek (11, 3))

function timeCostPerYear(minutesPerWeek) {
  const minutesPerYear = minutesPerWeek * 52
  return minutesPerYear
}
// console.log('Time cost per year: ', timeCostPerYear (33))

module.exports = timeCostObjCreator
