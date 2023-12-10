import express from 'express';
const jobRouter = express.Router();
import errorHandler from '../Middleware/ApiError.middleware.js'
import isLoggedIn from '../Middleware/Auth.middleware.js'
import jobPostingSchema from '../Models/JobDetails.models.js'
import jobPosterSchema from '../Models/JobPoster.models.js'


jobRouter.post('/create-job', isLoggedIn, async (req, res) => {
    const { name, logoURL, about } = req.body.company;
    const { position, type, location, remoteOrOffice, salary, description, skillsRequired, additionalInformation } = req.body.job;
    try {
        if (!name || !logoURL || !about || !position || !type || !location || !remoteOrOffice || !salary || !description || !skillsRequired || !additionalInformation) {
            res.status(400).json({
                message: "All fields are required"
            })
        }
        const newJob = new jobPostingSchema({
            company: { name, logoURL, about },
            job: { position, type, location, remoteOrOffice, salary, description, skillsRequired, additionalInformation }
        })
        const savedJob = await newJob.save();
        await jobPosterSchema.findOneAndUpdate(
            { _id: req.recruiter._id },
            { $addToSet: { jobpost: savedJob._id } }
        );
        res.status(200).json({
            message: "Job Posted Successfully"
        })
    }
    catch (err) {
        errorHandler(res, err)
    }

})
export default jobRouter;