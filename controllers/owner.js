const { Owner } = require('../models/models')
class OwnerController {
    async create (req, res) {
        try {
            const { userName } = req.body;
            if (!userName) {
                return res.json({ message: 'field userName is required' })
            }
            const owner = await Owner.create({ userName })

            res.json(owner)
        } catch (err) {
            console.log(err.message)
        }
    }
}

module.exports = new OwnerController()