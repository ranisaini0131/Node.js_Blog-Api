import express from 'express'


class CategoryController {

    static CategoryCreated = async () => {

        try {
            res.send({
                status: "success",
                message: "Category created"
            })
        } catch (error) {
            console.log(error)
        }
    }

    static getCategory = async () => {

        try {
            res.send({
                status: "success",
                message: "categories"
            })
        } catch (error) {
            console.log(error)
        }
    }

    static deleteCategory = async () => {

        try {
            res.send({
                status: "success",
                message: "Category Deleted"
            })
        } catch (error) {
            console.log(error)
        }
    }

    static updateCategory = async () => {

        try {
            res.send({
                status: "success",
                message: "Category Updated"
            })
        } catch (error) {
            console.log(error)
        }
    }



}

export default CategoryController