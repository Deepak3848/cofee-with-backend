import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

const app = express();

dotenv.config({
  path: './env'
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`)
    })
  }).catch((err) => {
    console.log(`MONGODB connection failed !!!`, err)
  })