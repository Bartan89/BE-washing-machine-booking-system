"use strict";
exports.__esModule = true;
var expressApp = require("express");
var app = expressApp();
var PORT = process.env.PORT || 8000;
var bodyParser = require('body-parser');
var cors = require('cors');
// const whitelist = ['http://localhost:4200']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
// }
app.use(cors());
// define a route handler for the default home page
var jsonParser = bodyParser.json();
var allowedIn = [1234, 4567];
app.post("/auth", jsonParser, function (req, res) {
    if (allowedIn.includes(req.body.code)) {
        res.send({ authentication: true });
    }
    else {
        res.send({ authentication: false });
    }
});
var getNumberOfWeek = function () {
    var today = new Date();
    var firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    var pastDaysOfYear = (today.valueOf() - firstDayOfYear.valueOf()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};
var nrWeek = getNumberOfWeek();
var tasks = [
    'Take out the trash',
    'mop the floors',
    'clean the surfaces',
    'clean the shower + toilet',
    'Take out the bottles + Vacuum',
    'mop the floors',
    'Take out the trash',
    'Take out the bottles + Vacuum',
    'clean the shower + toilet',
    'clean the surfaces',
    'mop the floors',
    'Take out the bottles + Vacuum',
    'clean the surfaces',
    'clean the shower + toilet',
    'Take out the trash',
    'Take out the bottles + Vacuum',
    'Take out the trash',
    'mop the floors',
    'clean the shower + toilet',
    'clean the surfaces',
    'Take out the bottles + Vacuum',
    'Take out the trash',
    'mop the floors',
    'clean the surfaces',
    'clean the shower + toilet',
    'mop the floors',
    'Take out the bottles + Vacuum',
    'Take out the trash',
    'clean the shower + toilet',
    'clean the surfaces',
    'Take out the trash',
    'clean the surfaces',
    'mop the floors',
    'clean the shower + toilet',
    'Take out the bottles + Vacuum',
    'mop the floors',
    'clean the surfaces',
    'Take out the trash',
    'clean the shower + toilet',
    'Take out the bottles + Vacuum',
    'Take out the trash',
    'mop the floors',
    'Take out the bottles + Vacuum',
    'clean the surfaces',
    'clean the shower + toilet',
    'Take out the trash',
    'clean the surfaces',
    'mop the floors',
    'Take out the bottles + Vacuum',
    'clean the shower + toilet',
    'Take out the trash',
    'mop the floors',
    'clean the surfaces',
    'clean the shower + toilet',
    'Take out the bottles + Vacuum'
];
//const allTasks = [...tasks, tasks, tasks, tasks, tasks, tasks, tasks, tasks,tasks,tasks, tasks]
//const mergedAllTasks = [].concat.apply([], allTasks);
//console.log(tasks.filter(e => e !== 'xxxx'))
// Bart your task of this week is " + mergedAllTasks[result + 2]
app.get("/cleaning-list", jsonParser, function (req, res) {
    var result = getNumberOfWeek();
    console.log(result);
    res.send("\n    <h1>Hi everyone! \uD83D\uDC4B it is week: " + (nrWeek - 2) + "</h1>  \n    <ul>\n      <li>Bart your task of this week is: <b> " + tasks[nrWeek] + " </b></li>\n      <li>Camila your task of this week is: <b> " + tasks[nrWeek + 1] + " </b></li>\n      <li>Camille your task of this week is: <b> " + tasks[nrWeek + 2] + " </b></li>\n      <li>Andrej your task of this week is: <b> " + tasks[nrWeek + 3] + " </b></li>\n      <li>Miguel your task of this week is: <b> " + tasks[nrWeek + 4] + " </b></li>\n    </ul>");
});
// start the Express server
app.listen(PORT, function () {
    console.log("server started at http://localhost:" + PORT);
});
