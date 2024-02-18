import express from 'express'


class userController {
    static userSignup = async () => {
        try {
            res.send({
                status: "success",
                message: "user registered"
            })
        } catch (error) {
            console.log(error)
        }
    }

    static userLogin = async () => {
        try {
            res.send({
                status: "success",
                message: "user login successful"
            })
        } catch (error) {
            console.log(error)
        }
    }

    static getUserProfile = async () => {
        try {
            res.send({
                status: "success",
                message: "user Profile"
            })
        } catch (error) {
            console.log(error)
        }
    }

    static getAllUsers = async () => {
        try {
            res.send({
                status: "success",
                message: "All Users"
            })
        } catch (error) {
            console.log(error)
        }
    }

    static deleteUsers = async () => {
        try {
            res.send({
                status: "success",
                message: "User Deleted successfully"
            })
        } catch (error) {
            console.log(error)
        }
    }

    static updateUsers = async () => {
        try {
            res.send({
                status: "success",
                message: "User Updated successfully"
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export default userController