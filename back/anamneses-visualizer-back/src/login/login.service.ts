import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginRepository } from './login.repository';
import { LoginDto } from './login.dto';

@Injectable()
export class LoginService {
  constructor(private readonly loginRepository: LoginRepository) {}

  async getTokenDoctor(body: LoginDto) {
    const doctor = await this.loginRepository.getDoctor(body);
    if (!doctor) {
      throw new HttpException('Doctor not found', HttpStatus.NOT_FOUND);
    }
    return doctor;
  }
}
