import mongoose from "mongoose";

const boardSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        default: false
    },
    department: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Board = mongoose.model('User', boardSchema)

export default Board