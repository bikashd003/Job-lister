import express from 'express';
import connectDb from './Database/Db.js'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        serverTime: new Date().toLocaleString(),
        serverName: 'Week list server',
    })
})



connectDb()
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`);

        })
    })
    .catch((error) => {
        console.log("MongoDB connection error", error)
    })
