const express = require('express')
const router = express.Router()
const reportData = require('./data/reports.json')

router.use((req, res, next) => {
  next();
});

// Get all reports
router.get('/', (req, res, next) => {
    res.send(reportData.elements);
});

// Get a report by ID
router.get('/:id', (req, res, next) => {
    let reportToSend = reportData.elements.filter(report => {
        return report.id === req.params.id
    })
    res.send(reportToSend);
});

// Block a report by ID
router.put('/:id/block', (req, res, next) => {
    let blockSuccess = false;

    for (let i = 0; i < reportData.elements.length; i++) {
        if (reportData.elements[i].id === req.params.id) {
            reportData.elements[i].viewState = 'BLOCKED';
            blockSuccess = true;
        }
    }
    
    if (blockSuccess) {
        res.send(`Report ${req.params.id} successfully blocked`);
    } else {
        res.send(`Unable to block report ${req.params.id}`)
    }
});

// Resolve a report by ID 
router.put('/:id/resolve', (req, res, next) => {
    let resolveSuccess = false;

    for (let i = 0; i < reportData.elements.length; i++) {
        if (reportData.elements[i].id === req.params.id) {
            reportData.elements[i].ticketState = 'CLOSED';
            resolveSuccess = true;
        }
    }
    
    if (resolveSuccess) {
        res.send(`Report ${req.params.id} successfully resolved`);
    } else {
        res.send(`Unable to resolve report ${req.params.id}`)
    }
});

module.exports = router