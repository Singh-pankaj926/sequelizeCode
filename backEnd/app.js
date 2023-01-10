const express = require('express');
const app = express();
const port = process.env.PORT ? process.env.PORT : 7000;
const host = `127.0.0.1`;
// const url = `http://127.0.0.1:7000/`
const Routes = require('./routes/routeIndex.js');
require('dotenv').config();
const sqlConnection = require('./db/authentication');
const sqlOperateDatabase = require('./db/connection');
const cors = require('cors');


// middleware
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

class Server {
  constructor() {
    console.log("Entered inside constructor")
    console.log("exited from constructor\n")
  }

  // executeApplicationMiddleware() {
  //   console.log("starting to execute the middleware")
  //   // Application level middleware
  //   app.use((req, res, next) => {
  //     console.log(`Executing first middleware code`);
  //     next();
  //   }, (req, res, next) => {
  //     console.log(`Executing second middleware code`);
  //     next();
  //   });
  //   console.log("executed the middleware\n")
  // }

  syncSequelizeModel(){
    sqlOperateDatabase.sync()
    // .then((result) => console.log(result))
    // .catch((err => console.log(err)))
  }

  init() {
    app.use('/', Routes)
  }

  async startServer() {
    try{
      await sqlConnection();
      // this.executeApplicationMiddleware();
      app.listen(port, host, (error) => {
        if (!error) {
          console.log(`Server is running and listening on port ${port} and host ${host}`);
          this.init();
          this.syncSequelizeModel();
        } else {
          console.log(`Error occurred, server can't start: ${error}`);
        }
      })
    }catch(err){
      console.log(err)
    }
  }
}

const server = new Server();
server.startServer();