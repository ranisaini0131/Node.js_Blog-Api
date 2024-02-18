import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: [true, "Post decription required"]
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: [true, "Post must belong to a Category"]
        },
        numView: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        likes: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        disLikes: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: [true, "please provide Author"]
        },
        photo: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)


export const Post = mongoose.model("User", postSchema)