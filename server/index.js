// tambahin "type": "module" di package.json agar import module bisa seperti ini
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();

// semua routes yg ada di postRoutes berawalan /posts
app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit : "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit : "30mb", extended: true }));
app.use(cors());

// https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = 'mongodb+srv://dennis:dennis123@cluster0.0titc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));