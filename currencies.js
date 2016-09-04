// Pull latest from: http://www.currency-iso.org/en/home/tables/table-a1.html
// Convert to JSON at: http://www.csvjson.com/csv2json

const fs = require('fs')
const R = require('ramda')

const currencies = JSON.parse(fs.readFileSync('./currencies.json'))

function goodCurrency (currency) {
  const code = currency.code
  return code.length === 3 && code[0] !== 'X'
}

function simplify (currency) {
  return {
    code: currency['Alphabetic Code'],
    display: currency['Currency']
  }
}

function toElmItem (currency) {
  return `{ code = "${currency.code}"
, display = "${currency.display}"
, searchWords = []
}`
}

const results = R.uniq(currencies.map(simplify).filter(goodCurrency)).map(toElmItem).join(',')
console.log('[' + results + ']')
