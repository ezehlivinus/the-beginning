import { Request, Response } from 'express';

class UserController {
  async create(req: Request, res: Response): Promise<Response> {
    return res.status(200).send('I have reached user.controller.create...');
  }
}

export default new UserController();
