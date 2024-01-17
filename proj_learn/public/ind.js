console.log("First log");
process.nextTick(() => {
    console.log("Next tick");
})
console.log("Second log");