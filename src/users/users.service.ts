import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserLoginDto } from './dtos/user-login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/models/User';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private UserModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async signup(user: CreateUserDto) {
    const { name, email, password, isAdmin } = user;

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    const User = {
      name,
      email,
      password: hash,
      isAdmin,
    };

    try {
      const createdUser = new this.UserModel(User);
      await createdUser.save();
      const jwtPayload = { email: createdUser.email };

      const result = {
        _id: createdUser.id,
        name: createdUser.name,
        token: this.jwtService.sign(jwtPayload, {
          secret: process.env.JWT_SECRET,
          expiresIn: '60d',
        }),
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
      };

      return result;
    } catch (error) {
      throw new BadRequestException(error.message || error);
    }
  }

  async signin(user: UserLoginDto) {
    const { email, password: requestPassword } = user;
    const foundUser = await this.UserModel.findOne({ email }).exec();

    if (foundUser) {
      const { password: foundUserPassword } = foundUser;
      if (bcrypt.compare(requestPassword, foundUserPassword)) {
        const jwtPayload = { email: user.email };

        const result = {
          _id: foundUser.id,
          name: foundUser.name,
          token: this.jwtService.sign(jwtPayload, {
            secret: process.env.JWT_SECRET,
            expiresIn: '60d',
          }),
          email: foundUser.email,
          isAdmin: foundUser.isAdmin,
        };

        return result;
      }
      throw new UnauthorizedException('Incorrect username or password');
    }
    throw new UnauthorizedException('Incorrect username or password');
  }

  async findOne(email: string) {
    return await this.UserModel.findOne({ email }).select('-password').exec();
  }
}
