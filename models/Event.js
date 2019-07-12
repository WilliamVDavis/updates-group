// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // Create Schema
// const EventSchema = new Schema({
//     eventName: {
//         type: String,
//         required: true
//     },
//     eventDate: {
//         type: String,
//         required: true
//     },
//     eventTime: {
//         type: String,
//         required: true
//     },
//     eventStreetAddress: {
//         type: String,
//         required: true
//     },
//     eventCity: {
//         type: String,
//         required: true
//     },
//     eventState: {
//         type: String,
//         required: true
//     },
//     eventZipCode: {
//         type: String,
//         required: true
//     },
//     creationDate: {
//         type: Date,
//         default: Date.now
//     }
// });


// module.exports = Event = mongoose.model("event", EventSchema);


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);
