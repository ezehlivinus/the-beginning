import { Request, Response } from 'express';
import User from '../models/user.model';
import userService from '../services/user.service';

class UserController {
  async create(req: Request, res: Response): Promise<Response> {
    // validate request

    const userAge = await userService.findCurrentAge(req.body.birthday);

    if (!userService.isValidAge(userAge)) {
      return res.status(400).send({
        success: true,
        message: 'User must be at least 15 years old.',
      });
    }

    const user = new User(req.body);

    await user.save();

    return res.status(200).send({
      success: true,
      message: 'User created successfully',
      data: user
    });
  }
}

export default new UserController();
