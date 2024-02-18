import dotenv from 'dotenv'
import connectDB from './db/index.db.js'
import { app } from './app.js'



dotenv.config({
    path: './env'
})




connectDB()
    .then(() => {

        app.on("error", (err) => console.log(err))


        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is listenig on port ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(`MongoDB connection failed !!`, err)
    })
