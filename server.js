const express = require("express");
const cluster = require("cluster");
const os = require("os");

const app = express();

app.get("/", (req, res) => {
  //Funciones a tener en cuenta:
  //JSON.stringify({}) => {}
  //JSON.parse("{}") => {}
  //[1,3,2,4,5].sort()
  res.send(`Performance example: ${process.pid}`);
});

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    // Busy-wait loop to simulate delay
  }
}

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`Delayed response: ${process.pid}`);
});

if (cluster.isMaster) {
console.log("Master has been started");
  const cpus = os.cpus().length;
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  console.log("Worker process started");
  app.listen(3000);
}
