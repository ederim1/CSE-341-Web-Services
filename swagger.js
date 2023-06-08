const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Description',
  },
//   host: 'localhost:3000',
  host: 'eder341test.onrender.com',
    // schemes: ['http'],
    schemes: ['https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);