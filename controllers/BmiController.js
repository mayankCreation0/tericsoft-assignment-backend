const BmiModel = require('../models/BmiModel');

const bmiCalculation = async (req, res) => {
    try {
        const { height, weight ,user} = req.body;
        console.log(user)
        const heightInMeter = (height * 0.305)
        const bmi = weight / Math.pow(heightInMeter, 2);

        const calculation = await BmiModel.create({ user, height, weight, bmi });
        // await calculation.save();
        console.log(calculation)

        return res.json({ bmi });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports = { bmiCalculation }