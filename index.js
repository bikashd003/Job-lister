import express from 'express';
import connectDb from './Database/Db.js'
import dotenv from 'dotenv'
import loginRouter from './Routes/login.routes.js';
import registerRouter from './Routes/register.routes.js';
dotenv.config({ path: './.env' })

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({
        serverTime: new Date().toLocaleString(),
        serverName: 'job portal server',
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
app.use('/api',registerRouter)
app.use('/api',loginRouter)