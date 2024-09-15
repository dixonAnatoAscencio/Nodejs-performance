const express = require("express");
//const cluster = require("cluster");
//const os = require("os");

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
    // event loop is blocked 
  }
}

app.get("/timer", (req, res) => {
  delay(4000);
  res.send(`Delayed response: ${process.pid}`);
});

//Zero downtime Restart
//pm2 reload server.js --> Reinicia el servidor 1 por 1 dejando un tiempo de inactividad, sin bloqueo total del servidor
//Garantiza que no se caiga el servidor 

//pm2 start server.js
//pm2 monit
//pm2 startup
//pm2 save


  app.listen(3000);

