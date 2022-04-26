const { calculatePrimes } = require('./primes')

const min = 2;
const max = 10000000;

// Sync
console.time('startCalculatePrimes')
console.log(calculatePrimes(min, max))
console.timeEnd('startCalculatePrimes')
