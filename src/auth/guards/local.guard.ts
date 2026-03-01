import { ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class LocalGuards extends AuthGuard('local') {
    private readonly logger = new Logger(LocalGuards.name)

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    this.logger.log('Guards called...');
    
    return super.canActivate(context);

  }
}
