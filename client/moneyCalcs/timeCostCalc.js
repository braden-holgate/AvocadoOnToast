const utils = require('./utils')

// this function is set up to receive an item costs object and a financials object from global state

function timeCostObjCreator(itemCostsObj, financialsObj) {
  ;({ id, item, cost, frequencyPerWeek } = itemCostsObj)
  ;({ income, incomePeriod, hoursWorkedPerWeek } = financialsObj)

  const minutesPerItem = timeCostPerItem(
    income,
    incomePeriod,
    hoursWorkedPerWeek,
    cost
  )
  const minutesPerWeek = timeCostPerWeek(minutesPerItem, frequencyPerWeek)
  const minutesPerYear = timeCostPerYear(minutesPerWeek)

  const dollarsPerMinute = timeValuePerMinute(
    income,
    incomePeriod,
    hoursWorkedPerWeek
  )

  return {
    item,
    timeCostPerItem: determineUnit(minutesPerItem),
    timeCostPerWeek: determineUnit(minutesPerWeek),
    timeCostPerYear: determineUnit(minutesPerYear),
    frequencyPerWeek,
    id,
    dollarsPerMinute,
  }
}

// the below function takes an input in minutes
function determineUnit(timeInMinutes) {
  const timeCostObj = {
    timeValue: null,
    unit: null,
  }
  const minutesInHour = 60 // 1 hour in minutes
  const minutesInDay = 24 * minutesInHour // 1 day in minutes
  const minutesInWeek = 7 * minutesInDay // 1 week in minutes

  if (timeInMinutes > minutesInWeek) {
    timeCostObj.timeValue = (timeInMinutes / minutesInWeek).toFixed(1)
    timeCostObj.unit = 'weeks'
  } else if (timeInMinutes > minutesInDay) {
    timeCostObj.timeValue = (timeInMinutes / minutesInDay).toFixed(1)
    timeCostObj.unit = 'days'
  } else if (timeInMinutes > minutesInHour) {
    timeCostObj.timeValue = (timeInMinutes / minutesInHour).toFixed(1)
    timeCostObj.unit = 'hours'
  } else {
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

function timeCostPerItem(income, incomePeriod, hoursWorkedPerWeek, cost) {
  const dollarsPerMinute = timeValuePerMinute(
    income,
    incomePeriod,
    hoursWorkedPerWeek
  )
  const minutesPerItem = cost / dollarsPerMinute
  return minutesPerItem
}

function timeCostPerWeek(minutesPerItem, frequencyPerWeek) {
  const minutesPerWeek = minutesPerItem * frequencyPerWeek
  return minutesPerWeek
}

function timeCostPerYear(minutesPerWeek) {
  const minutesPerYear = minutesPerWeek * 52
  return minutesPerYear
}

module.exports = timeCostObjCreator
