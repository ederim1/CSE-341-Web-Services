
const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const contactsRoutes = require("./routes/contacts");
const path = require("path");

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// mongodb connection
mongoose
   .connect(process.env.MONGODB_URI)
   .then(() => console.log("Connected to MongoDB Atlas"))
   .catch ((error) => console.error(error));

// settings 
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use('/api',contactsRoutes);


// routes
app.use('/', require("./routes"));



app.listen(port, () => {
   console.log(`Server is running on port ${port}`)
});

