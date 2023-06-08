const mongoose = require("mongoose");
const { Schema, model } = mongoose;
// Schema needed to build a new contact
const contactsSchema = new Schema({
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
const contactSchema = model('contact', contactsSchema);

module.exports =  contactSchema;