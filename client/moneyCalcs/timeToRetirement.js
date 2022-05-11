const utils = require('./utils')
// export a function that takes in the income and savings estimate and outputs the time to retirement

function yearsToRetirement(
  income,
  incomePeriod,
  savings,
  savingsPeriod,
  currentSavings,
  additionalSavingsWeekly
) {
  const savingsNormalised =
    utils.moneyPerYear(savings, savingsPeriod) +
    utils.moneyPerYear(additionalSavingsWeekly, 'week')
  const afterTax = utils.afterTaxIncomePerYear(income, incomePeriod)
  const savingsRate = savingsNormalised / afterTax
  const SWR = 0.04
  const rateOfReturn = 0.05

  const calc1 =
    (((1 - savingsRate) * afterTax) / SWR) * rateOfReturn +
    savingsRate * afterTax
  const calc2 = currentSavings * rateOfReturn + savingsRate * afterTax
  const calc3 = Math.log10(calc1 / calc2)
  const yearsToRetire = utils.roundTo(calc3 / Math.log10(1 + rateOfReturn), 1)
  if (savingsRate > 1) {
    return 'Retire!'
  } else if (yearsToRetire == 0) {
    return { years: 0, message: 'Retire!' }
  } else {
    return yearsToRetire
  }
}

module.exports = {
  yearsToRetirement,
}
