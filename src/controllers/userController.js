import * as userService from '../services/userService.js';

export const getAllUsersHandler = async (req, res, next) => {
    try {
        const response = await userService.getAllUser();
        res.status(200).json({
            status: "success",
            data: response,
        });
    }
    catch (error) {
        next(error);
    }
}

export const getUsersByIdHandler = async (req, res, next) => {
  const { id } = req.params;
    try {
        const response = await userService.getUserById(id);
        if (!response) {
            return res.status(404).json({
                status: "fail",
                message: "User not found",
            });
        }
        res.status(200).json({
            status: "success",
            data: response,
        });
    }
    catch (error) {
        next(error);
    }
    }