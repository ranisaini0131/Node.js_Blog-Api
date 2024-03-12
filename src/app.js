import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

const port = 9000

app.use(cors({
    origin: true,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

app.use(express.static("public"))

app.use(cookieParser())


//import route
import userRoute from "../src/routes/user.route.js"

app.use("/api/v1/users", userRoute)


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

export { app }