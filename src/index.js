import dotenv from 'dotenv'
import { app } from './app.js'
import connect from './db/index.db.js'


dotenv.config({
    path: './env'
})

// connectDB.connect((err) => {
//     if (err) {
//         console.log("ERROR: ", err)
//     } else {
//         console.log("MYSql connection successful")
//     }
// })


connect()
    .then(() => {

        app.on("error", (err) => console.log(err))


        connect.connect(process.env.PORT || 8000, () => {
            console.log(`Server is listenig on port ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(`MongoDB connection failed !!`, err)
    })
