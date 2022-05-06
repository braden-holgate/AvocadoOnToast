// NORMALISE MONETARY INPUT DATA TO PER YEAR

function moneyPerYear(value, valuePeriod) {
  if (valuePeriod == 'week') 
    return value * 52
  else if (valuePeriod == 'fortnight')
    return value * 26
  else if (valuePeriod == 'year')
    return value
  else return console.log(`Error! '${valuePeriod}' does not match any of the available options in the moneyPerYear function in client/moneyCalcs/utils`)
}




// CALCULATE AFTER TAX INCOME PER YEAR
// input: pre-tax income per YEAR
// output: estimated after-tax income per YEAR

// Assumptions:
// 3% kiwisaver contribution
// no student loan

// pecentage take home pay calculated from https://www.paye.net.nz/calculator/
// percentage taken based on mid point between two data points (eg lessThan50K based on 45K salary)
// lowest income based on 35K, highest income based on 135K

// EXPORTED FUNCTION
function afterTaxIncomePerYear(income, incomePeriod) {
  const preTaxIncomePerYear = moneyPerYear(income, incomePeriod)
  const takeHomePercent = calcTakeHomePercent(preTaxIncomePerYear)
  return Math.round(preTaxIncomePerYear * takeHomePercent)
}

const takeHomePay = [
  { lessThan: 40000, takeHomePercent: 0.8233 },
  { lessThan: 50000, takeHomePercent: 0.795 },
  { lessThan: 60000, takeHomePercent: 0.7823 },
  { lessThan: 70000, takeHomePercent: 0.7628 },
  { lessThan: 80000, takeHomePercent: 0.7465 },
  { lessThan: 90000, takeHomePercent: 0.7322 },
  { lessThan: 100000, takeHomePercent: 0.721 },
  { lessThan: 110000, takeHomePercent: 0.7119 },
  { lessThan: 120000, takeHomePercent: 0.7044 },
  { lessThan: 130000, takeHomePercent: 0.698 },
  { lessThan: 140000, takeHomePercent: 0.6927 },
]

function calcTakeHomePercent(preTaxIncomePerYear) {
  if (preTaxIncomePerYear > takeHomePay[takeHomePay.length - 1].lessThan)
    return takeHomePay[takeHomePay.length - 1].takeHomePercent
  else {
    for (const payBracket of takeHomePay) {
      if (preTaxIncomePerYear <= payBracket.lessThan)
        return payBracket.takeHomePercent
    }
  }
}


module.exports = {
  afterTaxIncomePerYear,
}