import sequelize  from './src/configDB.js';
import express from 'express';
import order from './routes/order.js'
import './models/associations.js'

sequelize.sync().then(() => {
    console.log('Tabelas criadas com sucesso!');
}).catch((error) => {
    console.error('Erro ao criar as tabelas: ', error);
})
const app = express()
const port = 3000

app.use(express.json())
app.use('/order', order)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})