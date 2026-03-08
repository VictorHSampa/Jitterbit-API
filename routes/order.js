import { Router } from 'express';
import { insertOrder, getOrderByNumero, getAllOrders, deleteOrder, editOrder } from '../controller/order.js';
import { insertItem } from '../controller/item.js';

const orderRouter = Router();

orderRouter.post('/', async (req, res) => {
    const { numeroPedido, valorTotal, dataCriacao, items } = req.body;

    const orderResult = await insertOrder(numeroPedido, valorTotal, new Date(dataCriacao));
    if (orderResult.status) {
        return res.status(orderResult.status).json({ error: orderResult.message });
    }

    const order = orderResult.order;

    for (const item of items) {
        const itemResult = await insertItem(item.quantidadeItem, item.valorItem, item.idItem, order.id);
        if (itemResult.status) {
            return res.status(itemResult.status).json({ error: itemResult.message });
        }
    }

    res.status(201).json({ message: 'Order e items criados com sucesso', orderId: order.id });
});

orderRouter.get('/find/:numeroPedido', async (req, res) => {
    const result = await getOrderByNumero(req.params.numeroPedido);
    if (result.status) {
        return res.status(result.status).json({ error: result.message });
    }
    res.status(200).json({ order: result });
})


orderRouter.get('/list', async (req, res) => {
    let orders = await getAllOrders(req, res);
    const result = orders.map(order => {
        return {
            numeroPedido: order.numeroPedido,
            valorTotal: order.valor,
            dataCriacao: order.creationDate,
            items: order.items
        }
    })
    res.status(200).json(
        result
    );
})

orderRouter.delete('/:numeroPedido', async (req, res) => {
    await deleteOrder(req.params.numeroPedido);
    res.status(200).json({
        message: 'Order deletada com sucesso'
    });
})

orderRouter.put('/:numeroPedido', async (req, res) => {
    const result = await editOrder(req.params.numeroPedido, req.body.valorTotal, req.body.newNum);
    res.status(200).json(result || {
        message: 'Order atualizada com sucesso'
    });
})

export default orderRouter;


