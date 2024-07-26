import mongoose from "mongoose";

const profileSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        skill: {
            type: String,
            required: true,
        }
    }
)

export const Profile = mongoose.model("Frontend Developer", profileSchema)