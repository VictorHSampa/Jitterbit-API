import db from '../src/configDB.js'
import { Sequelize } from 'sequelize'

const Item = db.define('item', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    productId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {timestamps: false})

export default Item