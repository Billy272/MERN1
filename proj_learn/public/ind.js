
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