const { execFile } = require('child_process')

// execFile('node', ['hello.js'], (err, stdout, stderr) => {
//     if (err) {
//         throw err
//     } else if (stderr) {
//         console.error(stderr)
//     } else {
//         console.log(stdout)
//     }
// })

execFile('npm', ['-v'], (err, stdout, stderr) => {
    if (err) {
        throw err
    } else if (stderr) {
        console.error(stderr)
    } else {
        console.log(stdout)
    }
})