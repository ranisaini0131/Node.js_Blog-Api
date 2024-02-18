import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: [true, "First Name is requied"]
        },

        laststName: {
            type: String,
            required: [true, "Last Name is requied"]
        },

        profilePhoto: {
            type: String
        },

        email: {
            type: String,
            required: [true, "email is requied"]
        },

        password: {
            type: String,
            required: [true, "Password is requied"]
        },

        postCount: {
            type: Number,
            default: 0
        },

        isBlocked: {
            type: Boolean
        },
        isAdmin: {
            type: Boolean,
            default: false
        },

        role: {
            type: String,
            enum: ["Admin", "Guest", "Editor"]
        },

        viewedBy: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],

        followers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],

        following: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        active: {
            type: Boolean,
            default: true
        },

        posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post"
            }
        ],

    },
    {
        timestamps: true
    }
)


export const User = mongoose.model("User", userSchema)