import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";

// Middleware to authenticate Admin users
export const isAdminAuthenticated = catchAsyncErrors(async (req, res, next) => {
    // Get the token from cookies
    const token = req.cookies.adminToken;

    if (!token) {
        return next(new ErrorHandler("Admin token not found. Please log in.", 400));
    }

    try {
        // Verify the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        // Find the user by decoded ID and attach it to the request object
        req.user = await User.findById(decoded.id);
        
        if (!req.user) {
            return next(new ErrorHandler("User not found", 404));
        }

        // Check if the user is an Admin
        if (req.user.role !== "Admin") {
            return next(new ErrorHandler(`${req.user.role} is not authorized for this action!`, 403));
        }

        // Proceed to the next middleware if authentication and authorization are successful
        next();
    } catch (err) {
        return next(new ErrorHandler("Invalid or expired token. Please log in again.", 401));
    }
});

// Middleware to authenticate Patient users
export const isPatientAuthenticated = catchAsyncErrors(async (req, res, next) => {
    const token = req.cookies.patientToken;

    if (!token) {
        return next(new ErrorHandler("Patient token not found. Please log in.", 400));
    }

    try {
        // Verify the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // Find the user by decoded ID and attach it to the request object
        req.user = await User.findById(decoded.id);
        
        if (!req.user) {
            return next(new ErrorHandler("User not found", 404));
        }

        // Check if the user is a Patient
        if (req.user.role !== "Patient") {
            return next(new ErrorHandler(`${req.user.role} is not authorized for this action!`, 403));
        }

        // Proceed to the next middleware if authentication and authorization are successful
        next();
    } catch (err) {
        return next(new ErrorHandler("Invalid or expired token. Please log in again.", 401));
    }
});

// General Middleware for Role-based Authorization
export const isAuthorized = (...roles) => {
    return (req, res, next) => {
        // If the user's role is not in the allowed roles array, deny access
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`${req.user.role} is not allowed to access this resource!`, 403));
        }
        // Proceed if authorized
        next();
    };
};

