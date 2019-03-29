const first = require('./TestClass')
const second = require('./TestClass')

console.log(first.counter) // 0
console.log(second.counter) // 0
first.increment()
console.log(first.counter) // 1
console.log(second.counter) // 1
