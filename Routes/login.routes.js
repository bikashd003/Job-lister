import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import jobPosterSchema from '../Models/JobPoster.models.js'
import errorHandler from '../Middleware/ApiError.middleware.js'
const loginRouter = express.Router();


loginRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({
                msg: "Please fill all the fields"
            })}
          const recruiter = await jobPosterSchema.findOne({ email });
            if (!recruiter) {
                return res.status(400).json({ msg: "user not found" });
            }
            const isPasswordValid = await bcrypt.compare(password, recruiter.password);
            if (isPasswordValid) {
                const token = jwt.sign(recruiter.toJSON(), process.env.JWT_SECRET, { expiresIn: '10d' });
              
                return res.status(200).json({ message: "Login successfully", token,recruiterName:recruiter.name })
            }
            else {
                return res.status(400).json({ message: "Invalid credentials" });
            }
        }
    catch (err) {
            errorHandler(res, err)
        }

    })
export default loginRouter;