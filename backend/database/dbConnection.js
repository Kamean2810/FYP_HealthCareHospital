import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName: "HEALTH_CARE_HOSPITAL_MANAGEMENT_SYSTEM"
    }).then(()=>{
        console.log("DataBase Connected Sucessfully!..");
        
    }).catch(err=>{
        console.log(`Some Error Occured While Connecting To DataBase: ${err}`);
        

    });
};