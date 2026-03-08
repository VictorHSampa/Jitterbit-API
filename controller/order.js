import Order from '../models/orders.js'

export async function insertOrder(numeroPedido, valor, creationDate) {
    try {
        const order = await Order.create({ numeroPedido, valor, creationDate });
        return { message: 'Order created successfully', order };
    } catch (error) {
        return { message: error.message, status: 500 };
    }
}

export async function getOrderByNumero(id) {
    const order = await Order.findOne({ where: {numeroPedido: id} ,include: ['items'] });
    
    if (!order) {
        return { message: 'Order not found', status: 404 };
    }

    return order;
}

export async function getAllOrders() {
    
    const order = await Order.findAll({include: ['items']});
    return order;
}

export async function editOrder(num, valor, dataCriacao) {
    const updates = { num, valor, dataCriacao };

    await Tournament.update(updates, { where: {numeroPedido: num}});
    return { message: 'Order updated successfully' };
}

export async function deleteOrder(num) {
    const deletedOrder = await Order.destroy({ where: { numeroPedido: num } });
    if (!deletedOrder) {
        return { message: 'Order not found', status: 404 };
    }
    return { message: 'Order deleted successfully' };
}