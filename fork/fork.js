const { fork } = require('child_process');
const { resolve } = require('path');

const ports = [3000, 3001, 3002, 3003]

ports.forEach((port) => {
    const child = fork(resolve(__dirname, 'child.js'), [port])
    child.on('exit', (code) => {
        console.log('child_1 exit with code:', code)
    })
})
