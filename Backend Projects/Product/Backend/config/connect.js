import mongoose from 'mongoose';

const connectDB = async() =>{
    try {
        mongoose.set('strictQuery', false)
       const conn = await mongoose.connect(process.env.DATABASE, 
            {useNewUrlParser: true, useUnifiedTopology: true}
        )
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;