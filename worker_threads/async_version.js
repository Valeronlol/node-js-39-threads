const { Worker, isMainThread, parentPort, workerData } = require('worker_threads')
const { calculatePrimes } = require('./primes')

if (isMainThread) {
    const threadCount = 12;
    const max = 10000000;
    const min = 2;

    console.time('asyncCalc')
    const threads = new Set();
    const range = Math.ceil((max - min) / threadCount);

    let start = min;
    for (let i = 0; i < threadCount - 1; i++) {
        threads.add(new Worker(__filename, {
            workerData: {
                start,
                range,
            }
        }));
        start += range;
    }
    threads.add(new Worker(__filename, {
        workerData: {
            start,
            range: range + ((max - min + 1) % threadCount),
        }
    }));

    let result = 0
    for (let worker of threads) {
        worker.on('error', (err) => {
            throw err;
        });
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.timeEnd('asyncCalc')
                console.log('DONE: result', result);
            }
        })
        worker.on('message', (threadResult) => {
            result += threadResult
        });
    }
} else {
    parentPort.postMessage(calculatePrimes(workerData.start, workerData.range));
}
