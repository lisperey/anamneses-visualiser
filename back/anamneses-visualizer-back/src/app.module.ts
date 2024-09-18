import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { AnamnesesModule } from './anamneses/anamneses.module';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [DbModule, AnamnesesModule, LoginModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
