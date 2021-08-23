const express = require('express')
const router = express.Router()
const reportData = require('./data/reports.json')

router.use((req, res, next) => {
  console.log('reports router hit');
  next();
});

router.get('/', (req, res, next) => {
    res.send(reportData.elements);
});

router.get('/:reportId', (req, res, next) => {
    let reportToSend = reportData.elements.filter(report => {
        return report.id === req.params.reportId
    })
    res.send(reportToSend);
});

module.exports = router