import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AnamnesesRepository } from './anamneses.repository';

@Injectable()
export class AnamnesesService {
  constructor(private readonly anamnesesRepository: AnamnesesRepository) {}

  async getAnamneses(pacienteToken: string) {
    const anamneses =
      await this.anamnesesRepository.getListAnamnese(pacienteToken);
    if (!anamneses) {
      throw new HttpException('Anamneses not found', HttpStatus.NOT_FOUND);
    }
    return anamneses;
  }

  async getPacientes(doctorToken: string) {
    const pacientes =
      await this.anamnesesRepository.getListPaciente(doctorToken);
    return pacientes;
  }
}
