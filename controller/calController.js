const Calculator = require('../model/calSchema')


exports.getCal = async (req, res) => {
    try {
        const data = await Calculator.find()

        res.status(200).json({
            status: 'success',
            data: {
                data
            }
        })

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'fai'
        })
    }
}



exports.postCal = async (req, res) => {
    try {
        const data = await Calculator.create(req.body)
        res.status(201).json({
            status: 'success',
            data
        })

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'fai'
        })
    }
}