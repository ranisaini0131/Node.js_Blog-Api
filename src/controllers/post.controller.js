import express from 'express'


class postController {

    static postCreated = async () => {

        try {
            res.send({
                status: "success",
                message: "posts created"
            })
        } catch (error) {
            console.log(error)
        }
    }

    static getPost = async () => {

        try {
            res.send({
                status: "success",
                message: "Single Post"
            })
        } catch (error) {
            console.log(error)
        }
    }

    static getAllPost = async () => {

        try {
            res.send({
                status: "success",
                message: "All Post"
            })
        } catch (error) {
            console.log(error)
        }
    }

    static deletePost = async () => {

        try {
            res.send({
                status: "success",
                message: "Post Deleted"
            })
        } catch (error) {
            console.log(error)
        }
    }

    static updatePost = async () => {

        try {
            res.send({
                status: "success",
                message: "Post Updated"
            })
        } catch (error) {
            console.log(error)
        }
    }



}

export default postController