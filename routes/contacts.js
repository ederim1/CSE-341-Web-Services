const express = require('express');

const router = express.Router();
const contactSchema = require("../models/contacts");


// create contact
router.post('/contacts', (req, res) => {
    const contact = contactSchema(req.body);
    contact
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Get contacts
router.get('/contacts', (req, res) => {
    const contact = contactSchema(req.body);
    contactSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
// Get contacts by ID
router.get('/contacts/:id', (req, res) => {
    const { id } = req.params; 
    contactSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Modify contacts by ID
router.put('/contacts/:id', (req, res) => {
    const { id } = req.params; 
    const { firstName, lastName, email, position, birthday } = req.body;
    contactSchema
        .updateOne({ _id: id }, { $set:{ firstName, lastName, email, position, birthday } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;
