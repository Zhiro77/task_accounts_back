const sequelize = require('../db');
const {DataTypes} = require('sequelize');
const moment = require('moment')

const Account = sequelize.define('account', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},

}, {
    getterMethods: {
        createdAt() {
            return moment(this.getDataValue('createdAt')).format('DD-MM-YYYY');
        },
        updatedAt() {
            return moment(this.getDataValue('updatedAt')).format('DD-MM-YYYY');
        }
    }
})


const Owner = sequelize.define('owner', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userName: { type: DataTypes.STRING, unique: true, allowNull: false }
} , {
    getterMethods: {
        createdAt() {
            return moment(this.getDataValue('createdAt')).format('DD-MM-YYYY');
        },
        updatedAt() {
            return moment(this.getDataValue('updatedAt')).format('DD-MM-YYYY');
        }
    }
})

Owner.hasOne(Account);
Account.belongsTo(Owner);

module.exports = { Account, Owner }