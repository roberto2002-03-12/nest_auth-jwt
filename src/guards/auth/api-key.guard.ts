import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // declara una condicional para dejar pasar o no

    // ver header de request
    const request = context.switchToHttp().getRequest<Request>();
    // header que espero en Auth
    const authHeader = request.header('Auth');

    if (authHeader !== '12345') throw new UnauthorizedException('Not allowed');

    return true;
  }
}
