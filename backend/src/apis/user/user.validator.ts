import {Schema} from "express-validator";

export const userValidator : Schema = {
    userId: {
        isUUID: {
            errorMessage: 'please provide a valid userId'
        }
    },

    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    },

    profileName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'userName must be between seven and thirty two characters',
            options: {min: 1, max: 32}
        }
    }
};