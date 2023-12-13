import mongoose, { Schema } from "mongoose";

const jobPosterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    jobpost: [
        {
            type: Schema.Types.ObjectId,
            ref: "JobPosting"
        }
    ]
}, {
    timestamps: true
});

export default mongoose.model('Recruiter', jobPosterSchema);
