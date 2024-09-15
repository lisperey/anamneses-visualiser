import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginRepository } from './login.repository';
import { LoginController } from './login.controller';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [LoginService, LoginRepository],
})
export class LoginModule {}