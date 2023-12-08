import express from 'express';
import bcrypt from 'bcrypt';
import jobPosterSchema from '../Models/JobPoster.models.js'

const registerRouter = express.Router();

registerRouter.post('/register', async (req, res) => {
    const { name, email, mobile, password } = req.body;
    if (!name || !email || !mobile || !password) {
        return res.status(422).json({ error: "Please fill all the fields" });
    }
    try {
        const userExist = await jobPosterSchema.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = new jobPosterSchema({ name, email, mobile, password:encryptedPassword });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    }
    catch (err) {
        console.log("error to save user data", err)
        res.status(500).json({ error: "Failed to register user" });
    }
})
export default registerRouter;
