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
    const user = await this.authService.signup(body);
    return response.status(HttpStatus.CREATED).json({
      user,
    });
  }

  @Post('/signin')
  async signIn(@Res() response, @Body() user: UserLoginDto) {
    const token = await this.authService.signin(user);
    return response.status(HttpStatus.OK).json(token);
  }

  @UseGuards(AuthGuard)
  @Get('whoami')
  whoAmi(@Request() req) {
    return req.currentUser;
  }
}
