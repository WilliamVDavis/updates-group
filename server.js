
const express = require("express");
const path = require("path");
const mysql = require("mysql");
const bodyParser = require('body-parser');

// Pool to create connection to the database
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "IAmBh@m2019",
    database: "Hackathon_Site"
});


const app = express();
app.use(express.json());
// need body parser to read json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


// create static file for html page for server
app.use(express.static(path.join(__dirname, "public_total/MAIN_PAGE")));

// Get request to get user information from database. Currently all users, but can add WHERE, ect. so a client can search a specific user.
app.get('/getUsers/', (req, res) => {
    pool.query(`SELECT * FROM User;`, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});
// Get for events
app.get('/getEvents', (req, res) => {
    pool.query(`SELECT * FROM Events;`, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});

// Post requests so a client can add a user or event to the database
app.post("/Event_Data", function(req, res){
    console.log("Adding Event")
    console.log(req.body.eventName)
    console.log(req.body.eventStreetAddress)
    pool.query(`INSERT INTO Events (Event_Name, Event_Date, Event_Time, Age_Limit) VALUES ('${req.body.eventName}', '${req.body.eventDate}', '${req.body.eventTime}', '${req.body.eventAgeLimit}');`, function(error, results, fields){
        if (error) throw error;
    });
    
    pool.query(`INSERT INTO Event_Locations (Street_Address, City, State_Abvr, Zip_Code, Country) VALUES ('${req.body.eventStreetAddress}', '${req.body.eventCity}', '${req.body.eventState}', '${req.body.eventZipCode}', '${req.body.eventCountry}');`, function(error, results, fields){
        if (error) throw error;
        res.redirect("/");
    });
});

// if I need a seperate post for event location
// app.post("/Event_Data", function(req, res){
//     console.log("Adding Event")
//     console.log(req.body.eventName)
//     pool.query(`INSERT INTO Events (Event_Name, Event_Date, Event_Time, Age_Limit) VALUES ('${req.body.eventName}', '${req.body.eventDate}', '${req.body.eventTime}', '${req.body.eventAgeLimit}');`, function(error, results, fields){
//         if (error) throw error;
//         res.redirect("/");
//     });
// });

app.post("/User_Data", function(req, res){
    console.log("Adding User")
    pool.query(`INSERT INTO User (First_Name, Last_Name, Email, AGE, Phone_Num) VALUES ('${req.body.userFirstName}', '${req.body.userSecondName}', '${req.body.userEmail}', '${req.body.userAge}', '${req.body.userPhoneNumber}');`, function(error, results, fields){
        if (error) throw error;
        res.redirect("/");
    });

});

// establishes the port the server will use
const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
    console.log(`Server started on port ${PORT}`);
});