// A -> Accrued Amount (principal + interest)
// P -> Principal
// r -> Interest Rate
// t -> number of time periods elapsed
const utils = require('./utils')


function savingsTimeSeries(timeToRetirement, principal, rate, depositAnnual, additionalSavingsAnnual) {
  let timeSeries = [{year: 0, amt: 0}]
  for (i = 1; i < (timeToRetirement + 3); i++) {
    let accruedOnInitialPrincipal = utils.calcCompoundInterest(principal, rate, (timeToRetirement + 3))
    let accruedOnDeposits = utils.calcFVAnnuities(depositAnnual, additionalSavingsAnnual, rate, (timeToRetirement + 3))
    let totalAccrued = accruedOnDeposits + accruedOnInitialPrincipal
    timeSeries.push({year: i, amt: totalAccrued})
  }
  return timeSeries
}