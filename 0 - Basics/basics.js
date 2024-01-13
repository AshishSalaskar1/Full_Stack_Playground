// Promisified setTimeout

let promiseSetTimeout = (ms) => {
    return new Promise((resolve) => {
        setTimeout(
            function() {
                resolve(`COMPLETED WAITING FOR ${ms} seconds`)
            },
            ms
        )
    })
}

console.log("START")
promiseSetTimeout(5000).then((x) => {
    console.log(x)
})
console.log("END")