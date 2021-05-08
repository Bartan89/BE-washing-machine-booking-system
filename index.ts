import * as express from "express";

const expressApp = require( "express" );
const app = expressApp();
const port = 8080; // default port to listen
const bodyParser = require('body-parser')
const cors = require('cors')


const whitelist = ['http://localhost:4200']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}



// define a route handler for the default home page
const jsonParser = bodyParser.json()

const allowedIn = [1234, 4567]

app.post( "/", cors(corsOptions), jsonParser, ( req : express.Request, res ) => {
    if(allowedIn.includes(req.body.code)) {
      res.send({authentication : true});
    } else {
      res.send({authentication : false});
    }
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );