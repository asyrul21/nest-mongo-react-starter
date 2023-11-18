import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    if (!request.currentUser || !request.currentUser._id) {
      return false;
    }
    return request.currentUser?.isAdmin;
  }
}
