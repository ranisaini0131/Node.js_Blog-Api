import dotenv from 'dotenv'
import { app } from './app.js'
import { sequelize } from './db/index.db.js'

dotenv.config({
    path: './env'
})



// app.use()


sequelize.authenticate().then(() => {
    console.log(`Connection has been eastablished successfully!!!`)
}).catch((error) => {
    console.log(`Unable to connect to the databse:`, error)
})

