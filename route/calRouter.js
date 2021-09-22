const express = require('express')
const calController = require('../controller/calController')


const router = express.Router()

router.route('/').get(calController.getCal).post(calController.postCal)


module.exports = router