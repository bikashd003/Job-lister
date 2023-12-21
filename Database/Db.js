import mongoose from "mongoose";
const Db_name = "Job-lister"
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.DB_URI}/${Db_name}`)
        console.log(`Database is connected`)

    }
    catch (error) {
        console.log("Databse connection error", error)
        process.exit(1)

    }
}
export default connectDb;