import express from 'express';
import UsersController from '../controllers/user.controller';

class UsersRoutes {
  router: express.Router;

  basePath: string;

  constructor() {
    this.router = express.Router();
    this.basePath = '/users';
  }

  initialise() {
    this.router.route(`${this.basePath}`)
      .post(UsersController.create);

    return this.router;
  }
}

const userRoutes = new UsersRoutes();

export default userRoutes.initialise();
