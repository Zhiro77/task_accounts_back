const { Account } = require('../models/models')
class Accounts {
    async createAccount (req, res) {
        try {
            const { name, ownerId } = req.body

            if (!name || !ownerId) {
                return res.json({ message: 'fields name and ownerId is required' })
            }

            const account = await Account.create({ name, ownerId });
            res.json(account)
        } catch (err) {
            res.status(401).json({error: err})
        }
    }

    async getAccounts (req, res) {
        const accounts = await Account.findAll();
        res.json(accounts);
    }

    async getOneAccount (req, res) {
        const { id } = req.params;
        if (!id) return res.status(422).json({ error: 'Validation error.' });
        const oneAccount = await Account.findByPk(id);
        res.json(oneAccount);
    }
}

module.exports = new Accounts()