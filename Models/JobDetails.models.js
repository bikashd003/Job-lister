import mongoose,{Schema} from 'mongoose';

const companySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  logoURL: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  }
});

const jobSchema = new Schema({
  position: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum:["full time","part time"]
  },
  location: {
    type: String,
    required: true
  },
  remoteOrOffice: {
    type: String,
    required: true,
    enum:["remote","office"]
  },
  salary: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  skillsRequired: {
    type: [String],
    required: true
  },
  additionalInformation: {
    type: String
  }
});

const jobPostingSchema = new Schema({
  company: companySchema,
  job: jobSchema
}, {
  timestamps: true
});

export default mongoose.model('JobPosting', jobPostingSchema);


