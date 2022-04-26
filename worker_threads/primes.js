// https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE#:~:text=%D0%9F%D0%BE%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C%20%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%8B%D1%85%20%D1%87%D0%B8%D1%81%D0%B5%D0%BB%20%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%B0%D0%B5%D1%82%D1%81%D1%8F%20%D1%82%D0%B0%D0%BA,193%2C%20197%2C%20199%2C%20%E2%80%A6
function calculatePrimes(start, range) {
    let result = 0;
    const min = 2;

    let isPrime = true;
    let end = start + range;

    for (let i = start; i < end; i++) {
        for (let j = min; j < Math.sqrt(end); j++) {
            if (i !== j && i%j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            ++result;
        }
        isPrime = true;
    }

    return result
}

module.exports = {
    calculatePrimes,
}
