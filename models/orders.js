import db from '../src/configDB.js'
import { Sequelize } from 'sequelize'

const Order = db.define('order', {
    valor: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    creationDate:{
        type: Sequelize.DATE,
        allowNull: false
    }
}, {timestamps: false})

export default Order