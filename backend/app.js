import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import {errorMiddleware} from './middlewares/error.js';
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

const app = express();
dotenv.config();

app.use(
    cors({
    origin:[process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true,
}),

);

app.get("/",(req,res)=>{
  res.send("Hello World...!")
})

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/", // Ensure this directory exists or use a relative path like './temp/'
    createParentPath: true, // Ensures the directory is created if it doesn't exist
  }));
  

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);


dbConnection();



app.use(errorMiddleware);
export default app;
