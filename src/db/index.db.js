// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

//         console.log(`MONGODB connected!! DB HOST ${connectionInstance.connection.host} `)

//     } catch (error) {
//         console.log(`MONGODB connection error: ${error} `)
//         process.exit(1)
//     }
// }



import mysql from "mysql2"

async function connect() {

    try {

        // const connection = mysql.createConnection({
        //     "hostname": "localhost",
        //     // "port": "330",
        //     "user": "regina",
        //     "password": "",
        //     "database": "college"
        // })

        const connection = mysql.createConnection({
            host: "localhost", // Specify the hostname, not "hostname"
            // port: 3306, // Specify the port number (3306 is the default MySQL port)
            user: "regina", // Specify the MySQL username
            password: "", // Specify the MySQL password
            // database: "college" // Specify the database name
        });


        const result = connection.query("SELECT * FROM college")

        console.table(result)

    } catch (error) {
        console.log(error)
    }

}

export default connect