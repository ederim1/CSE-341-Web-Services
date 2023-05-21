
const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const contactsRoutes = require("./routes/contacts");


const app = express();

// mongodb connection
mongoose
   .connect(process.env.MONGODB_URI)
   .then(() => console.log("Connected to MongoDB Atlas"))
   .catch ((error) => console.error(error));

const port = process.env.PORT || 3000;


// middleware
app.use(express.json());
app.use('/api',contactsRoutes);

// routes
app.use('/', require("./routes"));



app.listen(port, () => {
   console.log(`Server is running on port ${port}`)
});

