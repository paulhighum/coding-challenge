const express = require('express');
const cors = require('cors');
const app = express();
const reports = require('./reports.js');

// Enable All CORS Requests
app.use(cors());

//Route to reports router
app.use('/reports', reports)

// API available on port 3000
app.listen(3000, () => {    
    console.log('Server running on port 3000');
});