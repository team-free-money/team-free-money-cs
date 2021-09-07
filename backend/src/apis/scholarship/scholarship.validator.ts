import {Schema} from 'express-validator';

export const scholarshipValidator : Schema = {
    scholarshipId: {
        isUUID: {
            errorMessage: 'please provide a valid scholarshipId'
        }
    },
    scholarshipAmount: {
        isLength: {
            errorMessage: 'scholarship amount cannot be longer than 140 characters',
            options: { max: 140 }
        },
        trim: true,
        escape: true
    },
    scholarshipCriteria: {
        isLength: {
            errorMessage: 'scholarship criteria cannot be longer than 140 characters',
            options: { max: 140 }
        },
        trim: true,
        escape: true
    },
    scholarshipDeadline: {
        isLength: {
            errorMessage: 'scholarship deadline cannot be longer than 140 characters',
            options: { max: 140 }
        },
        trim: true,
        escape: true
    },
    scholarshipDescription: {
        isLength: {
            errorMessage: 'scholarship description cannot be longer than 140 characters',
            options: { max: 140 }
        },
        trim: true,
        escape: true
    },
    scholarshipLink: {
        isLength: {
            errorMessage: 'scholarship link cannot be longer than 320 characters',
            options: { max: 320 }
        },
        trim: true,
        escape: true
    },
    scholarshipName: {
        isLength: {
            errorMessage: 'scholarship name cannot be longer than 140 characters',
            options: { max: 140 }
        },
        trim: true,
        escape: true
    },
};