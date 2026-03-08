import db from '../src/configDB.js'
import { Sequelize } from 'sequelize'

const Order = db.define('order', {
    numeroPedido:{
        type: Sequelize.STRING,
        allowNull: false
    },
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