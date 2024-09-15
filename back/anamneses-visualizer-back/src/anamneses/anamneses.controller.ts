import { Controller, Get, Param } from '@nestjs/common';
import { AnamnesesService } from './anamneses.service';

@Controller('anamneses')
export class AnamnesesController {
  constructor(private readonly anamnesesService: AnamnesesService) {}

  @Get('/:token')
  async getAnamneses(@Param('token') pacienteToken: string) {
    return await this.anamnesesService.getAnamneses(pacienteToken);
  }

  @Get('/pacientes/:token')
  async getPacientes(@Param('token') doctorToken: string) {
    return await this.anamnesesService.getPacientes(doctorToken);
  }
}
