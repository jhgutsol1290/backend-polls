const { Router } = require('express')
const {
    showCharts,
    addChart
} = require('../controllers/charts.controller')
const router = Router()

////////////////
////  CHARTS
////////////////
router.get('/charts', showCharts)
router.post('/charts', addChart)


module.exports = router