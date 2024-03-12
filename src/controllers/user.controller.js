import User from "../models/user.model.js"

const userSignup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (username && email && password) {
            // Check for existing users with the same username
            const existingUser = await User.findOne({ where: { email } });

            if (existingUser) {
                return res.status(400).json({
                    error: "User already exists"
                })
            }

            //Create User
            const newUser = await User.create({
                username,
                email,
                password
            })

            res.status(201).json({
                message: "user registered",
                newUser
            })

        } else {
            return res.status(400).json({
                error: 'Provide all Credentials'
            });
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Internal server error'
        });
    }
}

const userLogin = async () => {
    try {
        res.send({
            status: "success",
            message: "user login successful"
        })
    } catch (error) {
        console.log(error)
    }
}

const getUserProfile = async () => {
    try {
        res.send({
            status: "success",
            message: "user Profile"
        })
    } catch (error) {
        console.log(error)
    }
}

const getAllUsers = async () => {
    try {
        res.send({
            status: "success",
            message: "All Users"
        })
    } catch (error) {
        console.log(error)
    }
}

const deleteUsers = async () => {
    try {
        res.send({
            status: "success",
            message: "User Deleted successfully"
        })
    } catch (error) {
        console.log(error)
    }
}

const updateUsers = async () => {
    try {
        res.send({
            status: "success",
            message: "User Updated successfully"
        })
    } catch (error) {
        console.log(error)
    }
}


export {
    userSignup,
    userLogin,
    getAllUsers,
    getUserProfile,
    deleteUsers,
    updateUsers
}