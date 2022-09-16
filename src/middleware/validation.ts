// import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

export function userValidation() {
    return [check('fname').not().isEmpty().withMessage('fname is required..!!'),
    check('lname').not().isEmpty().withMessage('lname is required..!!'),
    check('mobile').not().isEmpty().withMessage('invailid email..!!'),
    check('email').isEmail().withMessage('invailid email..!!'),
    check('password').isLength({ min: 5 }).withMessage('invailid password..!!')]
}

export function productValidation() {
    return [check('productName').not().isEmpty().withMessage('product name is required..!!'),
    check('authorId').not().isEmpty().withMessage('authorId is required..!!'),
    check('price').not().isEmpty().withMessage('price is required..!!')]
}

export function cartValidation() {
    return [check('authorId').not().isEmpty().withMessage('authorId is required..!!'),
    check('productId').not().isEmpty().withMessage('productId is required..!!'),
    check('price').not().isEmpty().withMessage('price is required..!!')
    ]
}




