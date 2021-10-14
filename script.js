console.log('hooked up?')

const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

let root = document.getElementById('root')

let container = document.createElement('div')
container.id = 'container'
root.appendChild(container)

let dropDown = document.createElement('select')
container.appendChild(dropDown)

// for loop for dropdown list
for (let currency of currencies) {
  let option = document.createElement('option')
  option.innerText = currency
  dropDown.appendChild(option)

}
// this is where the dropdown choice gets pulled out
// I think there's some stuff out of order that needs to be higher up
let inputCurrencyName = document.createElement('label')
inputCurrencyName.id = 'inputCurrencyName'
dropDown.appendChild(inputCurrencyName)


dropDown.addEventListener('change', () => {
  inputCurrencyName.innerText = dropDown.value;
})

// fetch succesfully consoles data
fetch('https://openexchangerates.org/api/latest.json?app_id=c82922b826df4a358dbc0387ffd36c5b')
  .then(response => response.json())
  .then(data => console.log(data))


