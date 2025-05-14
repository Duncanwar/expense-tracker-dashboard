import joi from "joi";
import { Request, Response, NextFunction } from "express";
const signupSchema = joi.object({
  fullname: joi.string().min(2).max(50).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).max(20).required(),
  profile_picture: joi.string().uri().optional(),
});
const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).max(20).required(),
});
const validateSignup = (req: Request, res: Response, next: NextFunction) => {
  const { error } = signupSchema.validate(req.body);
  if (error) {
    return res.status(422).json({
      status: "error",
      message: error.details[0].message,
    });
  }
};
const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(422).json({
      status: "error",
      message: error.details[0].message,
    });
  }
};
export { validateSignup, validateLogin };
