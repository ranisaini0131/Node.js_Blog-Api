import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        title: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)


export const Category = mongoose.model("Category", categorySchema)