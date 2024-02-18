import express from 'express'


class commentController {

    static comments = async () => {

        try {
            res.send({
                status: "success",
                message: "Comment posted"
            })
        } catch (error) {
            console.log(error)
        }
    }

    static getComment = async () => {

        try {
            res.send({
                status: "success",
                message: "Comments"
            })
        } catch (error) {
            console.log(error)
        }
    }

    static deleteComment = async () => {

        try {
            res.send({
                status: "success",
                message: "Comment Deleted"
            })
        } catch (error) {
            console.log(error)
        }
    }

    static updateComment = async () => {

        try {
            res.send({
                status: "success",
                message: "Comment Updated"
            })
        } catch (error) {
            console.log(error)
        }
    }



}

export default commentController