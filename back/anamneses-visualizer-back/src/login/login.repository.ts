import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';
import { LoginDto } from './login.dto';

@Injectable()
export class LoginRepository {
  constructor(@InjectConnection() private readonly knex: Knex) {}
  async getDoctor(body: LoginDto): Promise<any> {
    return;
  }
}
