import { JwtService } from '@nestjs/jwt';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from '../users/users.service';
import { User } from 'src/models/User';

interface UserRequest extends Request {
  currentUser?: User;
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(
    private readonly jwt: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async use(req: UserRequest, res: Response, next: NextFunction) {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = await this.jwt.verify(token, {
        secret: process.env.JWT_SECRET,
      });

      const user = await this.usersService.findOne(decoded.email);
      if (user) {
        req.currentUser = user;
      }
    }
    next();
  }
}
