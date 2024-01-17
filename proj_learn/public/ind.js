setTimeout(() =>
    console.log("This is set timeout 1")
, 1000);
setTimeout(() => {
    console.log("This is set timeout 2");
    setTimeout(() => 
        console.log("This is set timeout inside another timeout")
    );
}, 500);
setTimeout(() => 
    console.log("This is set timeout 3")
, 1);

process.nextTick(() => {
    console.log("This is Next tick 1");
})
process.nextTick(() => {
    console.log("This is Next tick 2");
    process.nextTick(() => {
        console.log("This is Next tick inside another tick function");
    })
})
process.nextTick(() => {
    console.log("This is Next tick 3");
})

Promise.resolve().then(() => {
    console.log("Promise resolved 1");
});

Promise.resolve().then(() => {
    console.log("Promise resolved 2");
    Promise.resolve().then(() => {
        console.log("Promise resolved inside another promise");
    })
})

Promise.resolve().then(() => {
    console.log("Promise resolved 3");
})

//I/O queue
const fs = require("node:fs");

fs.readFile(__filename, () => {
    console.log("I/O 1");
    setImmediate(() => {
        console.log("Set immediately inside the reading file");
    })
    Promise.resolve().then(() => {
        console.log("Promise resolved inside reading file");
    })
    process.nextTick(() => {
        console.log("Next tick inside reading file");
    })
    setTimeout(() =>
        console.log("Set timeout inside reading file")
    );
    for (let i = 0; i < 2000000; i++){}
});
