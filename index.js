const express = require('express');
const app = express();
const reports = require('./reports.js');

//routes to reports router
app.use('/reports', reports)


app.listen(3000, () => {
 console.log('Server running on port 3000');
});