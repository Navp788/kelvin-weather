const kelvin=293;// kelvin 
const Celsius=kelvin-273;// Celsius
var fahrenheit;//fahrenheit
var Newton;
fahrenheit=(Celsius*(9/5)+32)
fahrenheit=Math.floor(fahrenheit)
// convert from Celsius to Fahrenheit, you often get a decimal number.
Newton=Celsius*(33/100)
Newton=Math.floor(Newton)
console.log(`The temperature is ${kelvin} degrees kelvin`)
console.log(`The temperature is ${Celsius} degrees Celsius`)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
console.log(`The temperature is ${Newton} degrees Newton`)