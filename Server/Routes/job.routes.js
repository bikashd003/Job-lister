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
        const skills = skillsRequired.split(',').map(skill => skill.trim());
        const newJob = new jobPostingSchema({
            company: { name, logoURL, about },
            job: { position, type, location, remoteOrOffice, salary, description, skillsRequired: skills, additionalInformation }
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



jobRouter.patch('/update-job/:jobId', isLoggedIn, async (req, res) => {
    const { jobId } = req.params;
    try {
        const updatedJob = await jobPostingSchema.findOneAndUpdate(
            { _id: jobId },
            { $set: { job: req.body } },
            { new: true }
        );
        res.status(200).json({
            message: "Job Updated Successfully",
            updatedJob
        })
    }
    catch (err) {
        errorHandler(res, err)
    }
})
jobRouter.get('/get-jobs', async (req, res) => {
    try {
        const { skillsRequired, position } = req.query;
        const query = {};

        if (skillsRequired) {
            query['job.skillsRequired'] = { $in: skillsRequired.split(',') };
        }

        if (position) {
            query['job.position'] = { $regex: new RegExp(position, 'i') };
        }

        const jobs = await (Object.keys(query).length > 0
            ? jobPostingSchema.find(query)
            : jobPostingSchema.find());

        res.status(200).json({
            jobs,
        });
    } catch (err) {
        errorHandler(res, err);
    }
});

jobRouter.get('/get-job/:jobId', async (req, res) => {
    const { jobId } = req.params;
    try {
        const job = await jobPostingSchema.findById(jobId);
        res.status(200).json({
            job
        })
    }
    catch (err) {
        errorHandler(res, err)

    }
})



export default jobRouter;