import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }

  private readonly logger = new Logger(LocalStrategy.name);

  async validate(email: string, password: string) {
    const user = await this.authService.validateUser({ email, password });
    if (!user) throw new UnauthorizedException('Not authorized');
    this.logger.log('User validated successfully inside LocalStrategy');
    return user;
  }
}
