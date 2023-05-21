const mongoose = require("mongoose");

// Schema needed to build a new contact
const contactSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Contact', contactSchema);
