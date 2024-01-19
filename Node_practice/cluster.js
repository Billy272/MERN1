const cluster = require('node:cluster');

if(cluster.isMaster){
    console.log(`Master ${process.pid} is running.`);
} else {
    console.log(`Worker ${process.pid} started.`);
}