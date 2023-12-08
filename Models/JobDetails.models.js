import mongoose, { Schema } from "mongoose";
const jobSchema = new Schema({
    
}, {timestamps:true});
export default mongoose.model("Job", jobSchema);