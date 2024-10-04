import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/connect.js';
import userRoutes from './routes/userRoutes.js';
const PORT = process.env.PORT || 5000

dotenv.config()
connectDB()
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use('/user', userRoutes)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () =>{
    console.log(`Server is running at port ${PORT}`);
})
