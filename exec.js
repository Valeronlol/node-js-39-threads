const { exec } = require('child_process')

exec('cat lorem.txt | grep "repudiandae"', (err, stdout, stderr) => {
    if (err) {
        throw err
    } else if (stderr) {
        console.error(stderr)
    } else {
        console.log(stdout)
    }
})

// exec('python3 hello.py', (err, stdout, stderr) => {
//     if (err) {
//         throw err
//     } else if (stderr) {
//         console.error(stderr)
//     } else {
//         console.log(stdout)
//     }
// })