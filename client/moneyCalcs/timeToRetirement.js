
const utils = require('./utils') 
// export a function that takes in the income and savings estimate and outputs the time to retirement

const yearsToRetireArray = [
  "Infinity",98.9, 84.7, 76.3,70.4,65.8,62.0, 58.8,56,53.6,51.4,49.4,47.5, 45.8, 44.3,42.8,41.5,40.2,39,37.8,
  36.7,35.7,34.7,33.7,32.8,31.9,31.1,30.3,29.5,28.7,28,27.3,26.6,25.9,25.2,24.6,24,23.4,22.8,22.2,
  21.6,21.1,20.6,20,19.5,19,18.5,18,17.5,17.1,16.6,16.2,15.7,15.3,14.9,14.4,14,13.6,13.2,12.8,12.4,
  12,11.7,11.3,10.9,10.5,10.2,9.8,9.5,9.1,8.8,8.5,8.1,7.8,7.5,7.1,6.8,6.5,6.2,5.9,5.6,5.3,5,4.7,4.4,
  4.1,3.8,3.5, 3.2,2.9,2.7,2.4,2.1,1.8,1.6,1.3,1,0.8,0.5,0.3,0
]

function yearsToRetirement (income, incomePeriod, savings, savingsPeriod) {
  const savingsNormalised = utils.moneyPerYear(savings, savingsPeriod)
  const afterTax = utils.afterTaxIncomePerYear(income, incomePeriod)

  const savingsRate = roundTo((savingsNormalised/afterTax), 2)
  const index = roundTo((savingsRate*100), 0)
  const yearsToRetire = yearsToRetireArray[index]
  // console.log('aftertax' + afterTax)
  // console.log('savings' + savingsNormalised)
  // console.log(savingsRate)
  // console.log(index)
  // console.log(yearsToRetire)
  if (savingsRate > 1) {
    return "Woah! You're saving more than your after tax income! Retire today!"
  } else if (yearsToRetire == 0) {
    return ({years: 0, message: "Retire today!"})
  } else {
    return yearsToRetire
  }
}

function roundTo(n, digits) {
  var negative = false;
  if (digits === undefined) {
      digits = 0;
  }
  if (n < 0) {
      negative = true;
      n = n * -1;
  }
  var multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  n = (Math.round(n) / multiplicator).toFixed(digits);
  if (negative) {
      n = (n * -1).toFixed(digits);
  }
  return n;
}
// console.log(yearsToRetirement(10000, "year", 6000, "year"))
module.exports = {
  yearsToRetirement,
}