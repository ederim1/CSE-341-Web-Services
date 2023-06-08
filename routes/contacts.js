const express = require('express');
const contactSchema = require("../models/contacts");

const router = express.Router();

// create contact
router.post('/contacts', (req, res) => {
    const contact = contactSchema(req.body);
    const { firstName, lastName, email, position, birthday } = req.body;
    contact
        .save({
            firstName: firstName,
            lastName: lastName,
            email: email,
            position: position,
            birthday: birthday
        })
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

// Delete contacts by ID
router.delete('/contacts/:id', (req, res) => {
    const { id } = req.params;
    contactSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router;
