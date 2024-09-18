import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { AuthService } from '../auth.service';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(
  HeaderAPIKeyStrategy,
  'api-key',
) {
  constructor(private authService: AuthService) {
    super(
      { header: 'api-key', prefix: '' },
      true,
      async (apiKey: string, done: (err: any, value: any) => void) => {
        if (this.authService.validateApiKey(apiKey)) done(null, true);

        done(new UnauthorizedException('invalid api-key'), null);
      },
    );
  }
}
