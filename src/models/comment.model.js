import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
    {
        post: {
            type: Schema.Types.ObjectId,
            ref: "Post"
        },
        user: {
            type: Schema.Types.ObjectId,
            required: [true, 'User field is required'],
        },
        description: {
            type: String,
            required: [true, "Comment description is required"]
        }
    },
    {
        timestamps: true
    }
)


export const Comment = mongoose.model("Comment", commentSchema)