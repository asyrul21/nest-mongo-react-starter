import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('/api/my-module-controller')
export class MyModuleControllerController {
  constructor() {}

  @Get()
  myPublicRoute() {
    return 'Hello World!';
  }

  @Get('/admin')
  @UseGuards(AuthGuard)
  myPrivateRoute() {
    return 'Well Done!';
  }
}
