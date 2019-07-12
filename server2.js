const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

// Connects to HTTP request routes folders
const users = require("./routes/api/users");
const events = require("./routes/api/events");


const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Bring in DB config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

// create static file for html page for server
app.use(express.static(path.join(__dirname, "public_total/MAIN_PAGE")));

// Use Routes
// app.use("/", require("./routes/index"));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "/public_total/MAIN_PAGE/index.html"))
// });
app.use("/api/users", users);
app.use("/api/events", events);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});