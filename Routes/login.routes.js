import express from 'express';
import jwt from 'jsonwebtoken';
import jobPosterSchema from '../Models/JobPoster.models.js'
const loginRouter = express.Router();


loginRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const recruiter = await jobPosterSchema.findOne({ email });
        if (!recruiter) {
            return res.status(400).json({ msg: "user not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, recruiter.password);
        if (isPasswordValid) {
            const token = jwt.sign(recruiter.toJSON(), process.env.JWT_SECRET, { expiresIn: '10d' });
            return res.status(200).json({ message: "Login successfully", token })
        }
        else {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
    }
    catch (err) {
        console.log(err);

        res.status(500).json({ msg: "server error" });
    }

})
export default loginRouter;