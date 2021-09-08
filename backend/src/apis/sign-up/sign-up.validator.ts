import {Schema} from 'express-validator';

export const signUpValidator: Schema= {
    userEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    },
    userPassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    },
    userPasswordConfirm: {
        isLength: {
            errorMessage: 'confirm password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    },
    userName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'user name must be between seven and thirty two characters',
            options: {min:1, max: 32 }
        }
    },

};

