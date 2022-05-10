// A -> Accrued Amount (principal + interest)
// P -> Principal
// r -> Interest Rate
// t -> number of time periods elapsed
const utils = require('./utils')

function savingsTimeSeries(timeToRetirement, principal, rate, savings, savingsPeriod,additionalSavingsWeekly ) {
  const depositAnnual = utils.moneyPerYear(savings, savingsPeriod)
  const additionalSavingsAnnual = utils.moneyPerYear(additionalSavingsWeekly, 'week')
  let timeSeries = [{year: 0, amt: 0}]
  const period = Number(timeToRetirement) + 2
  for (let i = 1; i < period; i++) {
    let accruedOnInitialPrincipal = utils.calcCompoundInterest(principal, rate, i)
    let accruedOnDeposits = utils.calcFVAnnuities(depositAnnual, additionalSavingsAnnual, rate, i)
    let totalAccrued = utils.roundTo((accruedOnDeposits + accruedOnInitialPrincipal), 0)
    timeSeries.push({year: i, amt: totalAccrued})
  }
  return timeSeries
}

module.exports = {
  savingsTimeSeries,
}