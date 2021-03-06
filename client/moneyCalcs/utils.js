// NORMALISE MONETARY INPUT DATA TO PER YEAR

function moneyPerYear(value, valuePeriod) {
  if (valuePeriod == 'day') return value * 365
  else if (valuePeriod == 'week') return value * 52
  else if (valuePeriod == 'fortnight') return value * 26
  else if (valuePeriod == 'month') return value * 12
  else if (valuePeriod == 'year') return value
}

// from stackoverflow
function roundTo(n, digits) {
  let negative = false
  if (digits === undefined) {
    digits = 0
  }
  if (n < 0) {
    negative = true
    n = n * -1
  }
  const multiplicator = Math.pow(10, digits)
  n = parseFloat((n * multiplicator).toFixed(11))
  n = (Math.round(n) / multiplicator).toFixed(digits)
  if (negative) {
    n = (n * -1).toFixed(digits)
  }
  return n
}

function additionalSavings(costs, compareCosts) {
  let weeklySavingsCount = 0
  for (let i = 0; i < costs.length; i++) {
    let costsFreq = Number(costs[i].frequencyPerWeek)
    let compareCostsFreq = Number(
      (compareCosts[i] || costs[i]).frequencyPerWeek
    )
    weeklySavingsCount += (costsFreq - compareCostsFreq) * costs[i].cost
  }
  return weeklySavingsCount
}

// CALCULATE AFTER TAX INCOME PER YEAR
// input: pre-tax income per YEAR
// output: estimated after-tax income per YEAR

// Assumptions:
// no kiwisaver contribution
// no student loan

// pecentage take home pay calculated from https://www.paye.net.nz/calculator/
// percentage taken based on mid point between two data points (eg lessThan 50K based on 45K salary)
// lowest income based on 35K, highest income based on 135K

// EXPORTED FUNCTION
function afterTaxIncomePerYear(income, incomePeriod) {
  const preTaxIncomePerYear = moneyPerYear(income, incomePeriod)
  const takeHomePercent = calcTakeHomePercent(preTaxIncomePerYear)
  return Math.round(preTaxIncomePerYear * takeHomePercent)
}

const takeHomePay = [
  { lessThan: 40000, takeHomePercent: 0.8533 },
  { lessThan: 50000, takeHomePercent: 0.8408 },
  { lessThan: 60000, takeHomePercent: 0.8123 },
  { lessThan: 70000, takeHomePercent: 0.7928 },
  { lessThan: 80000, takeHomePercent: 0.7765 },
  { lessThan: 90000, takeHomePercent: 0.7622 },
  { lessThan: 100000, takeHomePercent: 0.751 },
  { lessThan: 110000, takeHomePercent: 0.7419 },
  { lessThan: 120000, takeHomePercent: 0.7344 },
  { lessThan: 130000, takeHomePercent: 0.728 },
  { lessThan: 140000, takeHomePercent: 0.7227 },
]

function calcTakeHomePercent(preTaxIncomePerYear) {
  // handle case where income is greater than highest entry in table
  if (preTaxIncomePerYear > takeHomePay[takeHomePay.length - 1].lessThan)
    return takeHomePay[takeHomePay.length - 1].takeHomePercent
  // handle all other cases
  else {
    for (const payBracket of takeHomePay) {
      if (preTaxIncomePerYear <= payBracket.lessThan)
        return payBracket.takeHomePercent
    }
  }
}

// A -> Accrued Amount (principal + interest)
// P -> Principal
// r -> Interest Rate
// t -> number of time periods elapsed

function calcCompoundInterest(principal, rate, years) {
  return principal * Math.pow(1 + rate, years)
}

function calcFVAnnuities(depositAnnual, additionalSavingsAnnual, rate, years) {
  return (
    (depositAnnual + additionalSavingsAnnual) *
    ((Math.pow(1 + rate, years) - 1) / rate)
  )
}

function retirementAmount(
  income,
  incomePeriod,
  savings,
  savingsPeriod,
  additionalSavingsWeekly
) {
  const SWR = 0.04
  const savingsNormalised =
    moneyPerYear(savings, savingsPeriod) +
    moneyPerYear(additionalSavingsWeekly, 'week')
  const afterTax = afterTaxIncomePerYear(income, incomePeriod)
  const amount = roundTo(1 / SWR, 0) * (afterTax - savingsNormalised)
  return amount
}

module.exports = {
  afterTaxIncomePerYear,
  moneyPerYear,
  calcCompoundInterest,
  calcFVAnnuities,
  roundTo,
  additionalSavings,
  retirementAmount,
}
