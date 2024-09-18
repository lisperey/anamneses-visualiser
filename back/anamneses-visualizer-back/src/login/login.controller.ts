import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './login.dto';
import { ApiKeyAuthGuard } from 'src/auth/guard/apikey-auth.guard';

@Controller('login')
@UseGuards(ApiKeyAuthGuard)
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('')
  async get(@Body() body: LoginDto) {
    return await this.loginService.getTokenDoctor(body);
  }

}
