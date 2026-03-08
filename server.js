import sequelize  from './src/configDB.js';
import express from 'express';


const app = express()
const port = 3000

app.use(express.json())
app.use('/order', order)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})