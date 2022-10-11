import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import boards from './data/boards.js'
import User from "./models/userModel.js";
import Board from "./models/boardModel.js"
import connectDB from "./config/db.js";


dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Board.deleteMany()
        await User.deleteMany()
        
        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleBoards = boards.map(board => {
            return {
                ...board, 
                user: adminUser
            }
        });

        await Board.insertMany(sampleBoards)

        console.log('Data Imported'.green.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Board.deleteMany()
        await User.deleteMany()

        console.log('Data Deleted'.red.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
