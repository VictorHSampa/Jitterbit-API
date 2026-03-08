import Item from '../models/items.js'

export async function insertItem(quantity, price, productId, orderId) {
    try {
        const item = await Item.create({ quantity, price, productId, orderId });
        return { message: 'Item created successfully', item };
    } catch (error) {
        return { message: error.message, status: 500 };
    }
}