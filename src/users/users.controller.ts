import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserLoginDto } from './dtos/user-login.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/api/auth')
export class UserController {
  constructor(private authService: UsersService) {}

  @Post('/signup')
  async signUp(@Res() response, @Body() body: CreateUserDto) {
    const User = await this.authService.signup(body);
    return response.status(HttpStatus.CREATED).json(User);
  }

  @Post('/signin')
  async signIn(@Res() response, @Body() user: UserLoginDto) {
    const User = await this.authService.signin(user);
    return response.status(HttpStatus.OK).json(User);
  }

  @UseGuards(AuthGuard)
  @Get('whoami')
  whoAmi(@Request() req) {
    return req.currentUser;
  }
}
