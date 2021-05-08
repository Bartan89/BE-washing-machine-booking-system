"use strict";
exports.__esModule = true;
var expressApp = require("express");
var app = expressApp();
var PORT = process.env.PORT || 8000;
var bodyParser = require('body-parser');
var cors = require('cors');
var whitelist = ['http://localhost:4200'];
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
// define a route handler for the default home page
var jsonParser = bodyParser.json();
var allowedIn = [1234, 4567];
app.post("/auth", cors(corsOptions), jsonParser, function (req, res) {
    if (allowedIn.includes(req.body.code)) {
        res.send({ authentication: true });
    }
    else {
        res.send({ authentication: false });
    }
});
app.get("/", jsonParser, function (req, res) {
    res.send("welcome");
});
// start the Express server
app.listen(PORT, function () {
    console.log("server started at http://localhost:" + PORT);
});
