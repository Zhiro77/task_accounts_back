const express = require('express');
const sequelize = require('./db')
const app = express()
const cors = require('cors')
require('dotenv').config()


const accountsRoute = require('./routes/accountRouter');
const ownerRoute = require('./routes/ownerRoute');


const port = process.env.PORT || 4000
app.use(express.json());
app.use(cors())
app.use('/accounts', accountsRoute);
app.use('/owners', ownerRoute);

(async () => {
    try {

        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port, () => {
            console.log(`server started in port - ${port}`)
        })
    } catch (err) {
        console.log(err)
    }
})()




