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