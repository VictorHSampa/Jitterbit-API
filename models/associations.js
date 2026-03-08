import Order from './orders.js'
import Item from './items.js'

Item.belongsTo(Order, {foreignKey: 'orderId'})
Order.hasMany(Item, {foreignKey: 'orderId'})