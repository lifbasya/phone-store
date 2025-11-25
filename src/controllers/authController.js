import * as authService from '../services/authService.js';

export const registerHandler = async (req, res, next) => {
  try {
    const newUser = await authService.register(req.body);

    res.status(201).json({
      stastus: "success",
      message: 'User registered successfully',
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

export const loginHandler = async (req, res, next) => {
  try {
    const response = await authService.login(req.body);

    res.status(200).json({
      stastus: "success",
      message: 'User logined successfully',
      data: response,
    });
  } catch (error) {
    next(error);
  }
};