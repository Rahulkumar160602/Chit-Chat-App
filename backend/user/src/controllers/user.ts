import TryCatch from "../config/TryCatch.js";
import { generateToken } from "../config/generateToken.js";
import { publishToQueue } from "../config/rabbitmq.js"; // fix file path and remove .js
import { redisClient } from "../index.js"; // better to export from a config file, not index
import {User} from "../model/User.js"; // fix file path and remove .js
import type{ AuthenticatedRequest } from "../middleware/isAuth.js";

export const loginUser = TryCatch(async (req, res) => {
    const {email}= req.body

    const rateLimitKey=`otp:ratelimit:${email}`;
    const rateLimit=await redisClient.get(rateLimitKey);
    if(rateLimit){
        res.status(429).json({
            message: "Too many requests, please try again later."
        });
        return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpKey = `otp:${email}`;
    await redisClient.set(otpKey, otp,{
        EX: 300 // Set OTP expiration time to 5 minutes
    }); // Store OTP for 5 minutes
    await redisClient.set(rateLimitKey, "true", {
        EX: 60 // Set rate limit expiration time to 1 minute
    }); // Rate limit for 1 minute
    
    const message ={
        to: email,
        subject: "Your OTP Code",
        body: `Your OTP code is ${otp}. It is valid for 5 minutes.`
    };
    await publishToQueue("send-Otp", message);
    res.status(200).json({
        message: "OTP sent successfully",
        
    });

});

export const verifyUser = TryCatch(async(req,res)=> {
    const {email, otp:enteredOtp} = req.body

if(!email || !enteredOtp) {
    res.status(400).json({
        message: "Email and OTP are required"
    }); 
    return;
    
}
const otpKey = `otp:${email}`;
const storedOtp = await redisClient.get(otpKey);
if(!storedOtp || storedOtp !== enteredOtp) {
     res.status(400).json({
        message: "OTP has expired or is invalid"
    });
    return;
}
    await redisClient.del(otpKey);
       // Delete OTP after verification attempt

     let user = await User.findOne({ email });
     if(!user){
        const name = email.slice(0,8);
        user = await User.create({ name, email });
     }  

     const token = generateToken(user);
     res.json({
         message: "User verified successfully",
         user,
         token,
        });

            

});

export const myProfile = TryCatch(async (req: AuthenticatedRequest, res) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: "User not authenticated" });
    }
    res.json({
        message: "User profile retrieved successfully",
        user,
    });
}
);

export const updateName = TryCatch(async (req: AuthenticatedRequest, res) => {
    const user = await User.findById(req.user?._id);
    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }

    user.name = req.body.name;
    await user.save();

    const token = generateToken(user);
    res.json({
        message: "User name updated successfully",
        user,
        token,
    });
});


export const getAllUsers = TryCatch(async (req: AuthenticatedRequest, res) => {
    const users = await User.find();
    
    res.json(users);
});
export const getAUser = TryCatch(async (req, res) => {
    const user = await User.findById(req.params.id);

    res.json(user);
});
